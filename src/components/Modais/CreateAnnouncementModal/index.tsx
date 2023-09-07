import { FormEventHandler, useContext, useEffect } from "react";
import { FaAngleDown, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";
import { AnnouncementContext } from "../../../contexts/announces/announcementContext";
import {
  BrandCarsResponse,
  Car,
  CarsResponse,
} from "../../../contexts/announces/interface";
import { State } from "../../../hooks/state.hook";
import { carsApi } from "../../../services/api";
import { Modal } from "../Modal";
import {
  AddFieldButton,
  AnnouncementFormStyle,
  ButtonsWrapper,
  CancelButton,
  CreateAnnouncementButton,
  FullWidthInput,
  FullWidthSelect,
  HalfInputsContainer,
  HalfWidthInput,
  TextArea,
} from "./style";

export const CreateAnnouncementModal = ({ setIsModalOpen }) => {
  const { createAnnouncement, cars } = useContext(AnnouncementContext);

  const carBrands: Array<keyof CarsResponse> = Object.keys(cars.value) as Array<
    keyof CarsResponse
  >;
  const selectedBrand = State<keyof CarsResponse>(carBrands[0]);
  const selectedBrandCars = State<BrandCarsResponse>([]);
  const selectedCar = State<Car | null>(null);
  const mileage = State<number>(0);
  const price = State<number>(0);
  const color = State<string>("");
  const description = State<string>("");
  const coverImage = State<string>("");
  const images = State<Array<string>>([]);
  const isAddGalleryDisabled = images.value.length >= 10;

  function loadBrandCars(brand: string) {
    carsApi
      .get<BrandCarsResponse>(`/cars?brand=${brand}`)
      .then((res) => selectedBrandCars.set(res.data))
      .catch((err) => console.error(err));
  }

  const fuelType = (n: number) => {
    if (n === 1) return "gasolina";
    else if (n === 2) return "híbrido";
    else if (n === 3) return "elétrico";
    else return "";
  };

  useEffect(() => {
    if (typeof selectedBrand.value === "string") {
      loadBrandCars(selectedBrand.value);
    }
  }, [selectedBrand.value]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (
      selectedCar.value &&
      color.value &&
      mileage.value &&
      price.value &&
      description.value &&
      coverImage.value
    ) {
      createAnnouncement({
        brand: selectedCar.value.brand,
        model: selectedCar.value.name,
        color: color.value,
        year: Number(selectedCar.value.year),
        fuel_type: fuelType(selectedCar.value.fuel),
        mileage: mileage.value,
        price: price.value,
        fipe_price: selectedCar.value.value,
        description: description.value,
        cover_image: coverImage.value,
        images: images.value,
      });
    } else {
      toast.error(
        "* Preencha todos os campos obrigatórios para criar o anuncio. "
      );
    }
  };

  return (
    <Modal
      closeFunction={() => {
        setIsModalOpen(false);
      }}
      title='Criar anúncio'
    >
      <AnnouncementFormStyle onSubmit={handleSubmit}>
        <h3> Informações do veículo </h3>

        <FullWidthSelect>
          <label> Marca </label>
          <div>
            <select
              value={selectedBrand.value || "Selecione uma marca"}
              onChange={(e) => selectedBrand.set(e.target.value)}
            >
              <option> Selecione uma marca </option>
              {carBrands.map((b) => (
                <option
                  value={b}
                  key={b}
                >
                  {" "}
                  {b}{" "}
                </option>
              ))}
            </select>
            <FaAngleDown />
          </div>
        </FullWidthSelect>

        <FullWidthSelect>
          <label> Modelo </label>
          <div>
            <select
              value={selectedCar.value?.id || "Selecione um modelo"}
              onChange={(e) => {
                const findCar = selectedBrandCars.value.find(
                  (c) => c.id === e.target.value
                );
                selectedCar.set(findCar || null);
              }}
            >
              <option> Selecione um modelo </option>
              {selectedBrandCars.value.map((car) => (
                <option
                  value={car.id}
                  key={car.id}
                >
                  {car.name} {car.year}
                </option>
              ))}
            </select>
            <FaAngleDown />
          </div>
        </FullWidthSelect>

        <HalfInputsContainer>
          <HalfWidthInput>
            <label> Ano </label>
            <input
              value={selectedCar.value?.year}
              disabled
            />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Combustível </label>
            <input
              value={fuelType(selectedCar.value?.fuel)}
              disabled
            />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Quilometragem </label>
            <input
              placeholder='* Qual é a quilometragem?'
              value={`${String(mileage.value).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              )}`}
              onChange={(e) => {
                mileage.set(Number(e.target.value.replace(/\D/g, "")));
              }}
              onFocus={(e) =>
                (e.target.value = e.target.value.replace(" km", ""))
              }
              onBlur={(e) => (e.target.value = e.target.value + " km")}
            />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Cor </label>
            <input
              placeholder='* Qual é a cor?'
              value={color.value}
              onChange={(e) => color.set(e.target.value)}
            />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Preço tabela FIPE </label>
            <input
              disabled
              value={`R$ ${String(selectedCar.value?.value || 0).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              )}`}
            />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Preço </label>
            <input
              placeholder='* Qual é o preço?'
              value={`R$ ${String(price.value).replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              )}`}
              onChange={(e) => {
                price.set(Number(e.target.value.replace(/\D/g, "")));
              }}
            />
          </HalfWidthInput>
        </HalfInputsContainer>

        <TextArea>
          <label> Descrição </label>
          <textarea
            placeholder='* Adicione informações adicionais sobre o seu anúncio...'
            value={description.value}
            onChange={(e) => description.set(e.target.value)}
            maxLength={2000}
          />
        </TextArea>

        <FullWidthInput>
          <label> Imagem da capa </label>
          <input
            value={coverImage.value}
            onChange={(e) => coverImage.set(e.target.value)}
            placeholder='* Imagem da capa. ex: https://imageurl.com'
            type='url'
          />
        </FullWidthInput>

        {images.value.map((s, i) => (
          <FullWidthInput>
            <label> {i + 1}° Imagem da galeria </label>
            <input
              placeholder='https://imageurl.com'
              type='url'
              value={s}
              onChange={(e) =>
                images.set((prev) => {
                  prev[i] = e.target.value;
                  return prev;
                })
              }
            />
            <FaMinus
              onClick={() => {
                images.set((prev) => {
                  return prev.filter((_, index) => index !== i);
                });
              }}
            />
          </FullWidthInput>
        ))}

        <AddFieldButton
          onClick={() => images.set((prev) => [...prev, ""])}
          disabled={isAddGalleryDisabled}
        >
          Adicionar campo para imagem da galeria
        </AddFieldButton>

        <ButtonsWrapper>
          <CancelButton
            type='button'
            onClick={() => setIsModalOpen(false)}
          >
            Cancelar
          </CancelButton>
          <CreateAnnouncementButton type='submit'>
            Criar anúncio
          </CreateAnnouncementButton>
        </ButtonsWrapper>
      </AnnouncementFormStyle>
    </Modal>
  );
};

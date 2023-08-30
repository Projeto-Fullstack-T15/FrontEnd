import { useContext } from "react";
import { Modal } from "../Modal";
import { AddFieldButton, AnnouncementFormStyle, ButtonsWrapper, CancelButton, CreateAnnouncementButton, FullWidthInput, FullWidthSelect, HalfInputsContainer, HalfWidthInput, TextArea } from "./style";
import { FaAngleDown, FaMinus } from "react-icons/fa";
import { AnnouncementContext } from "../../contexts/announces/announcementContext";
import { State } from "../../hooks/state.hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateAnnouncementSchema } from "../../contexts/announces/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAnnouncementSchema } from "./schema";

export const CreateAnnouncementModal = () => {
    const { createAnnouncement } = useContext(AnnouncementContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateAnnouncementSchema>({
        resolver: yupResolver(createAnnouncementSchema),
    });

    const onSubmit: SubmitHandler<CreateAnnouncementSchema> = (data) => {
        createAnnouncement({ ...data, images: galleryState.value });
    };

    const galleryState = State<Array<string>>([]);
    const isAddGalleryDisabled = galleryState.value.length >= 10;

    return (
        <Modal
            closeFunction={() => { console.log("close") }}
            title="Criar anúncio"
        >
            <AnnouncementFormStyle onSubmit={handleSubmit(onSubmit)}>
                <h3> Informações do veículo </h3>

                <FullWidthSelect>
                    <label> Marca </label>
                    <div>
                        <select {...register("brand")}>
                            <option> Chevrolet </option>
                        </select>
                        <FaAngleDown />
                    </div>
                </FullWidthSelect>

                <FullWidthSelect>
                    <label> Modelo </label>
                    <div>
                        <select {...register("model")}>
                            <option> camaro ss 6.2 v8 16v </option>
                        </select>
                        <FaAngleDown />
                    </div>
                </FullWidthSelect>

                <HalfInputsContainer>
                    <HalfWidthInput className={errors.year ? "error" : ""}>
                        <label> Ano </label>
                        <input
                            placeholder="2018"
                            {...register("year")}
                        />
                    </HalfWidthInput>
                    <HalfWidthInput className={errors.fuel_type ? "error" : ""}>
                        <label> Combustível </label>
                        <input
                            placeholder="Gasolina / Etanol"
                            {...register("fuel_type")}
                        />
                    </HalfWidthInput>
                    <HalfWidthInput className={errors.mileage ? "error" : ""}>
                        <label> Quilometragem </label>
                        <input
                            placeholder="30.000"
                            {...register("mileage")}
                        />
                    </HalfWidthInput>
                    <HalfWidthInput className={errors.color ? "error" : ""}>
                        <label> Cor </label>
                        <input
                            placeholder="Branco"
                            {...register("color")}
                        />
                    </HalfWidthInput>
                    <HalfWidthInput>
                        <label> Preço tabela FIPE </label>
                        <input
                            placeholder="R$ 48.000,00"
                            disabled
                        />
                    </HalfWidthInput>
                    <HalfWidthInput className={errors.price ? "error" : ""}>
                        <label> Preço </label>
                        <input
                            placeholder="R$ 50.000,00"
                            {...register("price")}
                        />
                    </HalfWidthInput>
                </HalfInputsContainer>

                <TextArea className={errors.description ? "error" : ""}>
                    <label> Descrição </label>
                    <textarea
                        placeholder="Adicione informações adicionais sobre o seu anúncio..."
                        {...register("description")}
                    />
                </TextArea>

                <FullWidthInput className={errors.cover_image ? "error" : ""}>
                    <label> Imagem da capa </label>
                    <input
                        placeholder="https://imageurl.com"
                        {...register("cover_image")}
                    />
                </FullWidthInput>

                {
                    galleryState.value.map((s, i) => (
                        <FullWidthInput key={`ìmage_${i}`}>
                            <label> {i + 1}° Imagem da galeria </label>
                            <input
                                placeholder="https://imageurl.com"
                                value={s}
                                onChange={(e) => galleryState.set((prev) => {
                                    const newArr = [...prev];
                                    newArr[i] = e.target.value;
                                    return newArr;
                                })}
                            />
                            <FaMinus
                                onClick={() => {
                                    galleryState.set((prev) => {
                                        return prev.filter((_, index) => index !== i);
                                    })
                                }}
                            />
                        </FullWidthInput>
                    ))
                }

                <AddFieldButton
                    onClick={() => galleryState.set((prev) => [...prev, ""])}
                    disabled={isAddGalleryDisabled}
                    type="button"
                >
                    Adicionar campo para imagem da galeria
                </AddFieldButton>

                <ButtonsWrapper>
                    <CancelButton
                        type="button"
                    >
                        Cancelar
                    </CancelButton>
                    <CreateAnnouncementButton
                        type="submit"
                    >
                        Criar anúncio
                    </CreateAnnouncementButton>
                </ButtonsWrapper>
            </AnnouncementFormStyle>
        </Modal>
    );
}
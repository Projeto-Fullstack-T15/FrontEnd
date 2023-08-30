import { FormEventHandler, useContext } from 'react';
import { Modal } from '../Modais/Modal';
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
} from './style';
import { FaAngleDown, FaMinus } from 'react-icons/fa';
import { AnnouncementContext } from '../../contexts/announces/announcementContext';
import { State } from '../../hooks/state.hook';

export const CreateAnnouncementModal = () => {
  const { createAnnouncement } = useContext(AnnouncementContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createAnnouncement({});
  };

  const galleryState = State<Array<string>>([]);
  const isAddGalleryDisabled = galleryState.value.length >= 10;

  return (
    <Modal
      closeFunction={() => {
        console.log('close');
      }}
      title='Criar anúncio'
    >
      <AnnouncementFormStyle onSubmit={handleSubmit}>
        <h3> Informações do veículo </h3>

        <FullWidthSelect>
          <label> Marca </label>
          <div>
            <select>
              <option> Chevrolet </option>
            </select>
            <FaAngleDown />
          </div>
        </FullWidthSelect>

        <FullWidthSelect>
          <label> Modelo </label>
          <div>
            <select>
              <option> camaro ss 6.2 v8 16v </option>
            </select>
            <FaAngleDown />
          </div>
        </FullWidthSelect>

        <HalfInputsContainer>
          <HalfWidthInput>
            <label> Ano </label>
            <input placeholder='2018' />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Combustível </label>
            <input placeholder='Gasolina / Etanol' />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Quilometragem </label>
            <input placeholder='30.000' />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Cor </label>
            <input placeholder='Branco' />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Preço tabela FIPE </label>
            <input placeholder='R$ 48.000,00' />
          </HalfWidthInput>
          <HalfWidthInput>
            <label> Preço </label>
            <input placeholder='R$ 50.000,00' />
          </HalfWidthInput>
        </HalfInputsContainer>

        <TextArea>
          <label> Descrição </label>
          <textarea placeholder='Adicione informações adicionais sobre o seu anúncio...' />
        </TextArea>

        <FullWidthInput>
          <label> Imagem da capa </label>
          <input placeholder='https://imageurl.com' />
        </FullWidthInput>

        {galleryState.value.map((s, i) => (
          <FullWidthInput>
            <label> {i + 1}° Imagem da galeria </label>
            <input
              placeholder='https://imageurl.com'
              value={s}
              onChange={(e) =>
                galleryState.set((prev) => {
                  prev[i] = e.target.value;
                  return prev;
                })
              }
            />
            <FaMinus
              onClick={() => {
                galleryState.set((prev) => {
                  return prev.filter((_, index) => index !== i);
                });
              }}
            />
          </FullWidthInput>
        ))}

        <AddFieldButton
          onClick={() => galleryState.set((prev) => [...prev, ''])}
          disabled={isAddGalleryDisabled}
        >
          Adicionar campo para imagem da galeria
        </AddFieldButton>

        <ButtonsWrapper>
          <CancelButton type='button'>Cancelar</CancelButton>
          <CreateAnnouncementButton type='submit'>
            Criar anúncio
          </CreateAnnouncementButton>
        </ButtonsWrapper>
      </AnnouncementFormStyle>
    </Modal>
  );
};

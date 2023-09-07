import { GrClose } from 'react-icons/gr';
import { ModalContainer } from '../../../style/globalStyle';
import {
  SectionModalStyle,
  TitleAndCloneStyle,
} from '../../../style/utilsStyle';
import ButtonComponents from '../../Global/Buttons';
import {
  DubleInputsStyle,
  FormEditAnnouncementStyle,
  SectionButtonsStyle,
  SectionButtonsSubmitStyle,
} from './style';
import { createPortal } from 'react-dom';
import Announcement from '../../../contexts/announces/interface';
import { useContext } from 'react';
import { AnnouncementContext } from '../../../contexts/announces/announcementContext';
import { useForm } from 'react-hook-form';

export interface IModalEditAnnouncementProps {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  announcement: Announcement;
}

const ModalEditAnnouncement = ({
  showModal,
  announcement,
}: IModalEditAnnouncementProps) => {
  const { updateAnnouncement } = useContext(AnnouncementContext);

  const { register, handleSubmit } = useForm<Partial<Announcement>>();

  const submit = (data: Partial<Announcement>) => {
    updateAnnouncement(announcement.id, data);
  };

  return createPortal(
    <ModalContainer>
      <SectionModalStyle $height='1296px' $width='541px'>
        <TitleAndCloneStyle>
          <h4>Editar anúncio</h4>
          <GrClose onClick={showModal(false)} />
        </TitleAndCloneStyle>
        <FormEditAnnouncementStyle onSubmit={handleSubmit(submit)}>
          <h4>Informações do veículo</h4>
          <div className='input--label'>
            <label htmlFor='brand'>Marca</label>
            <input
              type='text'
              id='brand'
              placeholder={announcement.brand}
              {...register('brand')}
            />
          </div>
          <div className='input--label'>
            <label htmlFor='model'>Modelo</label>
            <input
              type='text'
              id='model'
              placeholder={announcement.model}
              {...register('model')}
            />
          </div>
          <DubleInputsStyle>
            <div className='input--label'>
              <label htmlFor='year'>ano</label>
              <input
                type='number'
                id='year'
                placeholder={String(announcement.year)}
                {...register('year')}
              />
            </div>
            <div className='input--label'>
              <label htmlFor='feul_type'>Combustível</label>
              <input
                type='text'
                id='feul_type'
                placeholder={announcement.fuel_type}
                {...register('fuel_type')}
              />
            </div>
          </DubleInputsStyle>
          <DubleInputsStyle>
            <div className='input--label'>
              <label htmlFor='mileage'>Quilometragem</label>
              <input
                type='number'
                id='mileage'
                placeholder={String(announcement.mileage)}
                {...register('mileage')}
              />
            </div>
            <div className='input--label'>
              <label htmlFor='color'>Cor</label>
              <input
                type='text'
                id='color'
                placeholder={announcement.color}
                {...register('color')}
              />
            </div>
          </DubleInputsStyle>
          <DubleInputsStyle>
            <div className='input--label'>
              <label htmlFor='fipe_price'>Prço da tabela FIPE</label>
              <input
                type='number'
                id='fipe_price'
                placeholder={String(announcement.fipe_price)}
                {...register('fipe_price')}
              />
            </div>
            <div className='input--label'>
              <label htmlFor='price'>Preço</label>
              <input
                type='text'
                id='price'
                placeholder={String(announcement.price)}
                {...register('price')}
              />
            </div>
          </DubleInputsStyle>
          <div className='input--label'>
            <label htmlFor='description'>Descrição</label>
            <textarea
              id='description'
              placeholder={announcement.description}
              {...register('description')}
            />
          </div>
          <SectionButtonsStyle>
            <h3>Publicado</h3>
            <div>
              <ButtonComponents
                text='Sim'
                $size='large'
                $width='228px'
                typeButton='button'
                $type='outline2'
              />
              <ButtonComponents
                text='Não'
                $size='large'
                $width='228px'
                typeButton='button'
                $type='brand1'
              />
            </div>
          </SectionButtonsStyle>
          <div className='input--label'>
            <label htmlFor='cover_image'>Imagem da capa</label>
            <input
              type='text'
              id='cover_image'
              placeholder='https://image.com'
              {...register('cover_image')}
            />
          </div>
          <div className='input--label'>
            <label htmlFor='galerry_image1'>1° Imagem da galeria</label>
            <input
              type='text'
              id='galerry_image1'
              placeholder='https://image.com'
              {...register('gallery_images')}
            />
          </div>
          <div className='input--label'>
            <label htmlFor='galerry_image2'>2° Imagem da galeria</label>
            <input
              type='text'
              id='galerry_image2'
              placeholder='https://image.com'
              {...register('gallery_images')}
            />
          </div>
          <ButtonComponents
            typeButton='button'
            $type='brand'
            $size='small'
            $width='350px'
            text='Adicionar campo para imagem da galeria'
          />
          <SectionButtonsSubmitStyle>
            <ButtonComponents
              text='Excluir anúncio'
              $size='large'
              $width='262px'
              typeButton='button'
              $type='negative'
            />
            <ButtonComponents
              text='Salvar alterações'
              $size='large'
              $width='193px'
              typeButton='submit'
              $type='brand1'
            />
          </SectionButtonsSubmitStyle>
        </FormEditAnnouncementStyle>
      </SectionModalStyle>
    </ModalContainer>,
    document.body
  );
};

export default ModalEditAnnouncement;

import { GrClose } from 'react-icons/gr';
import { ModalContainer } from '../../../style/globalStyle';
import {
  SectionModalStyle,
  TitleAndCloneStyle,
} from '../../../style/utilsStyle';
import ButtonComponents from '../../Global/Buttons';

const ModalEditAnnouncement = () => {
  return (
    <ModalContainer>
      <SectionModalStyle $height='1296px' $width='541px'>
        <TitleAndCloneStyle>
          <h4>Editar anúncio</h4>
          <GrClose />
        </TitleAndCloneStyle>
        <form>
          <h3>Informações do veículo</h3>
          <div>
            <label htmlFor='brand'>Marca</label>
            <input type='text' id='brand' placeholder='Chevrolet' />
          </div>
          <div>
            <label htmlFor='model'>Modelo</label>
            <input type='text' id='model' placeholder='camoro ss 6.2 v8 16v' />
          </div>
          <div>
            <div>
              <label htmlFor='year'>ano</label>
              <input type='number' id='year' placeholder='2018' />
            </div>
            <div>
              <label htmlFor='feul_type'>Combustível</label>
              <input
                type='text'
                id='feul_type'
                placeholder='Gasolina / Etanol'
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='mileage'>Quilometragem</label>
              <input type='number' id='mileage' placeholder='30000' />
            </div>
            <div>
              <label htmlFor='color'>Cor</label>
              <input type='text' id='color' placeholder='Branco' />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='fipe_price'>Prço da tabela FIPE</label>
              <input type='number' id='fipe_price' placeholder='R$ 48.000,00' />
            </div>
            <div>
              <label htmlFor='price'>Preço</label>
              <input type='text' id='price' placeholder='R$ 50.000,00' />
            </div>
          </div>
          <div>
            <label htmlFor='description'>Descrição</label>
            <input
              type='number'
              id='description'
              placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ratione
          quasi modi maiores quis illum ea nam. Asperiores placeat quod
          exercitationem harum. Obcaecati perspiciatis placeat quam cumque quo
          sed consectetur?'
            />
          </div>
          <div>
            Publicado
            <div>
              <ButtonComponents
                text='Sim'
                $size='large'
                $width='228'
                typeButton='button'
                $type='outline2'
              />
              <ButtonComponents
                text='Não'
                $size='large'
                $width='228'
                typeButton='button'
                $type='brand1'
              />
            </div>
          </div>
          <div>
            <label htmlFor='cover_image'>Imagem da capa</label>
            <input
              type='text'
              id='cover_image'
              placeholder='https://image.com'
            />
          </div>
          <div>
            <label htmlFor='galerry_image1'>1° Imagem da galeria</label>
            <input
              type='text'
              id='galerry_image1'
              placeholder='https://image.com'
            />
          </div>
          <div>
            <label htmlFor='galerry_image2'>2° Imagem da galeria</label>
            <input
              type='text'
              id='galerry_image2'
              placeholder='https://image.com'
            />
          </div>
          <ButtonComponents
            typeButton='button'
            $type='outlineBrand1'
            $size='small'
            $width='315px'
            text='Adicionar campo para imagem da galeria'
          />
          <div>
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
          </div>
        </form>
      </SectionModalStyle>
    </ModalContainer>
  );
};

export default ModalEditAnnouncement;

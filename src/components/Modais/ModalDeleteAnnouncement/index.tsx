import { ModalContainer } from '../../../style/globalStyle';
import { GrFormClose } from 'react-icons/gr';
import ButtonComponents from '../../Global/Buttons';
import { createPortal } from 'react-dom';
import {
  ButtonsStyle,
  DetailModelDeleteStyle,
  SectionStyle,
  TitleAndCloneStyle,
} from './style';

const ModelDeleteAnnouncement = () => {
  return createPortal(
    <ModalContainer>
      <SectionStyle>
        <TitleAndCloneStyle>
          <h4>Excluir anúncio</h4>
          <GrFormClose />
        </TitleAndCloneStyle>
        <DetailModelDeleteStyle>
          <h3>Tem certeza que deseja remover este anúcio?</h3>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </DetailModelDeleteStyle>
        <ButtonsStyle>
          <ButtonComponents
            typeButton='button'
            text='Cancelar'
            $size='large'
            $width='126px'
            $type='negative'
          />

          <ButtonComponents
            typeButton='button'
            text='Sim, excluir anúncio'
            $size='large'
            $width='211px'
            $type='alert'
          />
        </ButtonsStyle>
      </SectionStyle>
    </ModalContainer>,
    document.body
  );
};

export default ModelDeleteAnnouncement;

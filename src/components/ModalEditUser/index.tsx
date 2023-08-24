import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { ModalContainer } from '../../style/globalStyle';
import { ButtonsStyle, FormStyle, SectionStyle } from './style';
import ButtonComponents from '../Global/Buttons';

const ModalEditUser = () => {
  return createPortal(
    <ModalContainer>
      <SectionStyle>
        <div>
          <h3>Editar Perfil</h3>
          <GrClose />
        </div>
        <FormStyle>
          <div className='input__class'>
            <label htmlFor='name'>Nome</label>
            <input type='text' id='name' placeholder='Samuel Leão Silva' />
          </div>
          <div className='input__class'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='samuel@kenzie.com.br' />
          </div>
          <div className='input__class'>
            <label htmlFor='CPF'>CPF</label>
            <input type='text' id='CPF' placeholder='900.880.090-00' />
          </div>
          <div className='input__class'>
            <label htmlFor='phone'>Celular</label>
            <input type='tel' id='phone' placeholder='(084) 90909-9092' />
          </div>
          <div className='input__class'>
            <label htmlFor='birthday'>Data de nascimento</label>
            <input type='date' id='birthday' placeholder='09/12/99' />
          </div>
          <div className='input__class'>
            <label htmlFor='description'>Descrição</label>
            <input type='text' id='description' placeholder='Lorem Ipsum...' />
          </div>
          <ButtonsStyle>
            <ButtonComponents
              typeButton='button'
              text='Cancelar'
              $size='large'
              $type='negative'
            />
            <ButtonComponents
              typeButton='button'
              text='Excluir Perfil'
              $size='large'
              $type='alert'
            />
            <ButtonComponents
              typeButton='submit'
              text='Salvar alterções'
              $size='large'
              $type='brand1'
            />
          </ButtonsStyle>
        </FormStyle>
      </SectionStyle>
    </ModalContainer>,
    document.body
  );
};

export default ModalEditUser;

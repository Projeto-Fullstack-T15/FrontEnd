import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { ModalContainer } from '../../../style/globalStyle';
import { ButtonsStyle, CloseStyle, FormStyle, SectionStyle } from './style';
import ButtonComponents from '../../Global/Buttons';
import {
  IModalEditUserProps,
  IFormEditUser,
  IFormEditUserUser,
} from './interface';
import { UserContext } from '../../../contexts/user/userContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TUpdateUser } from '../../../contexts/user/interfaces';

const ModalEditUser = ({ setIsEditUserModalOpen }: IModalEditUserProps) => {
  const { updateUser } = useContext(UserContext);

  const formSubmit = (data: IFormEditUser) => {
    const { cpf, birthday, description, name, ...account } = data;

    const user: IFormEditUserUser = {};

    if (cpf != '') user.cpf = cpf;
    if (birthday != '') user.birthday = birthday;
    if (name != '') user.name = name;
    if (description != '') user.description = description;

    const newData: TUpdateUser = {};

    if (account.email) newData.email = account.email;
    if (account.phone) newData.phone = account.phone;

    if (user.birthday || user.cpf || user.description || user.name)
      newData.user = user;

    updateUser(newData);
  };

  const { register, handleSubmit } = useForm<IFormEditUser>();

  return createPortal(
    <ModalContainer>
      <SectionStyle>
        <CloseStyle>
          <h3>Editar Perfil</h3>
          <GrClose onClick={() => setIsEditUserModalOpen(false)} />
        </CloseStyle>
        <FormStyle onSubmit={handleSubmit(formSubmit)}>
          <div className='input__class'>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              id='name'
              placeholder='Samuel Leão Silva'
              {...register('name')}
            />
          </div>
          <div className='input__class'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='samuel@kenzie.com.br'
              {...register('email')}
            />
          </div>
          <div className='input__class'>
            <label htmlFor='CPF'>CPF</label>
            <input
              type='text'
              id='CPF'
              placeholder='900.880.090-00'
              {...register('cpf')}
            />
          </div>
          <div className='input__class'>
            <label htmlFor='phone'>Celular</label>
            <input
              type='tel'
              id='phone'
              placeholder='(084) 90909-9092'
              {...register('phone')}
            />
          </div>
          <div className='input__class'>
            <label htmlFor='birthday'>Data de nascimento</label>
            <input
              type='date'
              id='birthday'
              placeholder='09/12/99'
              {...register('birthday')}
            />
          </div>
          <div className='input__class'>
            <label htmlFor='description'>Descrição</label>
            <input
              type='text'
              id='description'
              placeholder='Lorem Ipsum...'
              {...register('description')}
            />
          </div>
          <ButtonsStyle>
            <ButtonComponents
              typeButton='button'
              text='Cancelar'
              $size='large'
              $type='negative'
              onClick={() => setIsEditUserModalOpen(false)}
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

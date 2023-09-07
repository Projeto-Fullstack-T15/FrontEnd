import { GrFormClose } from 'react-icons/gr';
import { useContext } from 'react';
import { ModalContainer } from '../../../style/globalStyle';
import ButtonComponents from '../../Global/Buttons';
import {
  SectionModalStyle,
  TitleAndCloneStyle,
} from '../../../style/utilsStyle';
import { FormStyle, DivOfInput, DivButtons } from './style';
import { createPortal } from 'react-dom';
import { IEditAddress, IModalEditAddressProps } from './interface';
import { UserContext } from '../../../contexts/user/userContext';
import { useForm } from 'react-hook-form';
import { TUpdateUser } from '../../../contexts/user/interfaces';
import { toast } from 'react-toastify';

const ModalEditAddress = ({
  setIsEditAddressModalOpen,
}: IModalEditAddressProps) => {
  const { updateUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IEditAddress>();

  const formSubmit = (data: IEditAddress) => {
    const { city, complement, number, state, street, zip_code } = data;

    const address: IEditAddress = {};

    if (city != '') address.city = city;
    if (complement != '') address.complement = complement;
    if (number != '') address.number = number;
    if (state != '') address.state = state;
    if (street != '') address.street = street;
    if (zip_code != '') address.zip_code = zip_code;

    const newData: TUpdateUser = {
      address,
    };

    if (Object.keys(newData.address).length === 0) {
      return toast.error('Preencha algum campo antes de salvar.');
    }

    updateUser(newData);
  };

  return createPortal(
    <ModalContainer>
      <SectionModalStyle $height='560px' $width='520px'>
        <TitleAndCloneStyle>
          <h4>Editar endereço</h4>
          <GrFormClose onClick={() => setIsEditAddressModalOpen(false)} />
        </TitleAndCloneStyle>
        <FormStyle onSubmit={handleSubmit(formSubmit)}>
          <h4>Informações de endereço</h4>
          <DivOfInput>
            <label htmlFor='cep'>CEP</label>
            <input
              type='text'
              id='cep'
              placeholder='89888-888'
              {...register('zip_code')}
            />
          </DivOfInput>
          <div className='container__divs--input'>
            <DivOfInput>
              <label htmlFor='state'>Estado</label>
              <input
                type='text'
                id='state'
                placeholder='Paraná'
                {...register('state')}
              />
            </DivOfInput>
            <DivOfInput>
              <label htmlFor='city'>Cidade</label>
              <input
                type='text'
                id='city'
                placeholder='Curitiba'
                {...register('city')}
              />
            </DivOfInput>
          </div>
          <DivOfInput>
            <label htmlFor='street'>Rua</label>
            <input
              type='text'
              id='street'
              placeholder='Rua do paraná'
              {...register('street')}
            />
          </DivOfInput>
          <div className='container__divs--input'>
            <DivOfInput>
              <label htmlFor='number'>Número</label>
              <input
                type='number'
                id='number'
                placeholder='1029'
                {...register('number')}
              />
            </DivOfInput>
            <DivOfInput>
              <label htmlFor='complement'>Complemento</label>
              <input
                type='text'
                id='complement'
                placeholder='Apart 12'
                {...register('complement')}
              />
            </DivOfInput>
          </div>
          <DivButtons>
            <ButtonComponents
              typeButton='button'
              text='Cancelar'
              $size='large'
              $width='126px'
              $type='negative'
            />
            <ButtonComponents
              typeButton='submit'
              text='Salvar alterações'
              $size='large'
              $width='193px'
              $type='brand1'
            />
          </DivButtons>
        </FormStyle>
      </SectionModalStyle>
    </ModalContainer>,
    document.body
  );
};

export default ModalEditAddress;

import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
import { ModalContainer } from '../../../style/globalStyle';
import ButtonComponents from '../../Global/Buttons';
import {
  SectionModalStyle,
  TitleAndCloneStyle,
} from '../../../style/utilsStyle';
import { FormStyle, DivOfInput, DivButtons } from './style';

const ModalEditAddress = () => {
  const [value, setValue] = useState<boolean>(false);

  const verifyInputs = (target_value: string | undefined | null) => {
    target_value ? setValue(true) : setValue(false);
  };

  return (
    <ModalContainer>
      <SectionModalStyle $height='605px' $width='520px'>
        <TitleAndCloneStyle>
          <h4>Editar endereço</h4>
          <GrFormClose />
        </TitleAndCloneStyle>
        <FormStyle>
          <h4>Informaçõwes de endereço</h4>
          <DivOfInput>
            <label htmlFor='CEP'>CEP</label>
            <input
              type='text'
              id='CEP'
              placeholder='89888-888'
              onChange={(e) => verifyInputs(e.target.value)}
            />
          </DivOfInput>
          <div className='container__divs--input'>
            <DivOfInput>
              <label htmlFor='state'>Estado</label>
              <input
                type='text'
                id='state'
                placeholder='Paraná'
                onChange={(e) => verifyInputs(e.target.value)}
              />
            </DivOfInput>
            <DivOfInput>
              <label htmlFor='city'>Cidade</label>
              <input
                type='text'
                id='city'
                placeholder='Curitiba'
                onChange={(e) => verifyInputs(e.target.value)}
              />
            </DivOfInput>
          </div>
          <DivOfInput>
            <label htmlFor='street'>Rua</label>
            <input
              type='text'
              id='street'
              placeholder='Rua do paraná'
              onChange={(e) => verifyInputs(e.target.value)}
            />
          </DivOfInput>
          <div className='container__divs--input'>
            <DivOfInput>
              <label htmlFor='number'>Número</label>
              <input
                type='number'
                id='number'
                placeholder='1029'
                onChange={(e) => verifyInputs(e.target.value)}
              />
            </DivOfInput>
            <DivOfInput>
              <label htmlFor='complement'>Complemento</label>
              <input
                type='text'
                id='complement'
                placeholder='Apart 12'
                onChange={(e) => verifyInputs(e.target.value)}
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
              typeButton='button'
              text='Salvar alterações'
              $size='large'
              $width='193px'
              $type={value ? 'brand1' : 'brandDisable'}
            />
          </DivButtons>
        </FormStyle>
      </SectionModalStyle>
    </ModalContainer>
  );
};

export default ModalEditAddress;

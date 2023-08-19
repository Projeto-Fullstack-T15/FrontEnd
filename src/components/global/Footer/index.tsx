import { FooterStyle } from './style';
import LogoDark from './../../../assets/logoDarkMode.svg';
import Arrow from './../../../assets/arrowFooter.svg'

const FooterComponent = () => {
  return (
    <FooterStyle>
      <img src={LogoDark} alt='' />
      <p>@ 2022 - Todos os direitos reservados</p>
      <img src={Arrow} alt='arrow'/>
    </FooterStyle>
  );
};

export default FooterComponent;

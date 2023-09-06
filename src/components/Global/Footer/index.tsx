import { FooterStyle } from './style';
import LogoDark from './../../../assets/logoDarkMode.svg';

const FooterComponent = () => {
  return (
    <FooterStyle>
      <img src={LogoDark} alt='' />
      <p>@ 2022 - Todos os direitos reservados</p>
    </FooterStyle>
  );
};

export default FooterComponent;

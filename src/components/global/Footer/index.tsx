import { BiSolidUpArrow } from 'react-icons/bi';
import { FooterStyle } from './style';
import LogoDark from "./../../../assets/logoDarkMode.svg"


const FooterComponent = () => {
  return (
    <FooterStyle>
      <h3>
        Motors <span>shop</span>
      </h3>
      <p>@ 2022 - Todos os direitos reservados</p>
      <BiSolidUpArrow />
    </FooterStyle>
  );
};

export default FooterComponent;

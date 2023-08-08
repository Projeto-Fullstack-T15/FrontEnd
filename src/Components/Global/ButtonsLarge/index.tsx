import { IButtonLargerProps } from './interface';
import { ButtonStyle } from './style';

const ButtonLarge = ({ text, $type }: IButtonLargerProps) => {
  return <ButtonStyle $type={$type}>{text}</ButtonStyle>;
};

export default ButtonLarge;

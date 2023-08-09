import { IButtonProps } from './interface';
import { ButtonStyle } from './style';

const ButtonComponents = ({ text, $type, $size }: IButtonProps) => {
  return (
    <ButtonStyle $size={$size} $type={$type}>
      {text}
    </ButtonStyle>
  );
};

export default ButtonComponents;

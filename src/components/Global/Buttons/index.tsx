import { IButtonProps } from './interface';
import { ButtonStyle } from './style';

const ButtonComponents = ({
  text,
  $type,
  $size,
  typeButton,
  $width,
  $height,
  onClick
}: IButtonProps) => {
  return (
    <ButtonStyle
      type={typeButton}
      $width={$width}
      $height={$height}
      $size={$size}
      $type={$type}
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  );
};

export default ButtonComponents;

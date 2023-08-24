import { IButtonProps } from './interface';
import { ButtonStyle } from './style';

const ButtonComponents = ({
  text,
  $type,
  $size,
  typeButton,
  $width,
  $height,
}: IButtonProps) => {
  return (
    <ButtonStyle
      type={typeButton}
      $width={$width}
      $height={$height}
      $size={$size}
      $type={$type}
    >
      {text}
    </ButtonStyle>
  );
};

export default ButtonComponents;

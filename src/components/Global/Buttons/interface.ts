import { buttonsVariables } from '../../../utils';

type TType = (typeof buttonsVariables)[number]['id'];

export interface IStyleProps {
  $type: TType;
  $size: 'large' | 'small';
  $width?: number | undefined;
  $height?: number | undefined;
}
export interface IButtonProps extends IStyleProps {
  text: string;
  typeButton: 'submit' | 'reset' | 'button';
}

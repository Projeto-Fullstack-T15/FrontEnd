import { buttonsVariables } from '../../../utils';

type TType = (typeof buttonsVariables)[number]['id'];

export interface IStyleProps {
  $type: TType;
  $size?: 'large' | 'small' | undefined;
  $width?: string | undefined;
  $height?: string | undefined;
}
export interface IButtonProps extends IStyleProps {
  text: string;
  typeButton: 'submit' | 'reset' | 'button';
}

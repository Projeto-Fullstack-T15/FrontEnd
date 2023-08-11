import { buttonsVariables } from '../../../utils';

type TType = (typeof buttonsVariables)[number]['id'];

export interface IStyleProps {
  $type: TType;
  $size: 'large' | 'small';
}
export interface IButtonProps extends IStyleProps {
  text: string;
}

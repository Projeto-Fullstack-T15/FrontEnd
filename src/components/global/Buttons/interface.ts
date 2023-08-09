export interface IStyleProps {
  $type:
    | 'grey1'
    | 'nagative'
    | 'disable'
    | 'brand1'
    | 'light'
    | 'outlineLight'
    | 'outline1'
    | 'big45'
    | 'outline2'
    | 'outlineBrand1'
    | 'link'
    | 'alert'
    | 'sucess'
    | 'brandDisable';
  $size: 'large' | 'small';
}
export interface IButtonProps extends IStyleProps {
  text: string;
}

import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStyled } from './style';

export interface IInput {
  label?: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
  withBackground?: string;
  withDiv?: string;
  defaultValue?: string;
  rows?: number;
}

export const Input = ({
  label,
  type,
  register,
  error,
  placeholder,
  withBackground,
  withDiv,
  defaultValue,
  rows,
}: IInput) => {
  if (type === 'textarea') {
    return (
      <FieldStyled className={withDiv === 'yes' ? 'with-div' : ''}>
        <label htmlFor={register.name}>{label}</label>
        <textarea
          placeholder={placeholder}
          {...register}
          defaultValue={defaultValue || ''}
          className={withBackground === 'yes' ? 'with-background' : ''}
          rows={rows}
        />
      </FieldStyled>
    );
  }

  return (
    <FieldStyled className={withDiv === 'yes' ? 'with-div' : ''}>
      <label htmlFor={register.name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        defaultValue={defaultValue || ''}
        className={withBackground === 'yes' ? 'with-background' : ''}
      />
    </FieldStyled>
  );
};

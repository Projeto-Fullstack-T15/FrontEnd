import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStyled } from './style';

export interface IInput {
  label?: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  error: any;
  withBackground?: string;
  withDiv?: string;
  defaultValue?: string;
  rows?: number;
}

export const Input = ({
  label,
  type,
  register,
  placeholder,
  error,
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
      {error && <p>{error.message}</p>}
    </FieldStyled>
  );
};

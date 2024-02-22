import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TLoginBarSchema } from './types';
import { Button } from '../../ui/button';
interface Props {
  form: UseFormReturn<TLoginBarSchema>;
  onSubmit: any;
  header?: string | JSX.Element | null;
  formClass?: string;
  inputClass?: string;
  selectClass?: string;
  selectContainer?: string;
  buttonClass?: string;
}

const LoginView = ({
  form,
  onSubmit,
  header,
  formClass,
  inputClass,
  selectClass,
  buttonClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      {header}
      <Input
        placeholder="Enter username"
        {...register('userName')}
        autoComplete={'off'}
        className={inputClass}
      />
      {errors.userName && (
        <div className="text-red-500 text-xs">{`${errors.userName.message}`}</div>
      )}

      <Input
        placeholder="Enter password"
        {...register('password')}
        autoComplete={'off'}
        className={inputClass}
      />
      {errors.password && (
        <div className="text-red-500 text-xs">{`${errors.password.message}`}</div>
      )}

      <Button type={'submit'} className={buttonClass}>
        Login
      </Button>
    </form>
  );
};

export default LoginView;

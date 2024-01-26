import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TLoginBarSchema, loginBarSchema } from './types';
import LoginView from './login-view';

const LoginLogic = ({ onSubmit, ...props }: any) => {
  const form = useForm<TLoginBarSchema>({
    resolver: zodResolver(loginBarSchema),
  });

  const handleSubmit = async (data: TLoginBarSchema) => {
    await onSubmit(data);
    form.reset();
  };

  return <LoginView form={form} onSubmit={handleSubmit} {...props} />;
};

export default LoginLogic;

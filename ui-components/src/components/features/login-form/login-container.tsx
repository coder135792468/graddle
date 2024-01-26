'use client';

import LoginLogic from './login-logic';

const LoginContainer = ({ onSubmit, ...props }: any) => {
  return <LoginLogic onSubmit={onSubmit} {...props} />;
};

export { LoginContainer };

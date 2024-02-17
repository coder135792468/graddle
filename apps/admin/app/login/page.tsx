'use client';
import React from 'react';
import { LoginContainer } from '@frontend/ui-components';
import { useRouter } from 'next/navigation';
import { useLoginUserMutation } from 'apps/admin/store';
const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();
  const handleSubmit = async (loginData: any) => {
    try {
      const { data }: any = await loginUser(loginData);
      if (data.statusCode === 500) {
        throw new Error('User not found');
      }
      localStorage.setItem('loginUser', JSON.stringify(data));
      router.push('/');
    } catch (err) {
      router.push('/login');
    }
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-100">
      <LoginContainer
        header={<h1 className="m-auto font-medium">Admin Panel</h1>}
        formClass="flex flex-col p-5 bg-white shadow-lg w-[400px] m-auto"
        inputClass="mt-4"
        selectClass="w-full max-w-[350px] mb-5 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        buttonClass="mx-3 bg-[orange] text-white mt-2 hover:opacity-50"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;

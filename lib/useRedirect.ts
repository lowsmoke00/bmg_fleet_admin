'use client';

import { useRouter } from 'next/navigation';

type UserRole = 'admin' | 'driver';

export const useRedirectToDashboard = () => {
  const router = useRouter();

  return (role: UserRole) => {
    if (role === 'admin') {
      router.push('/dashboard');
    } else if (role === 'driver') {
      router.push('/driver/dashboard');
    }
  };
};

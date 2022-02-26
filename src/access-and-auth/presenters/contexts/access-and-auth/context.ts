import { createContext, useContext } from 'react';
import { Login, User } from '@/access-and-auth/domain';

type PropsAccessAndAuthContext = {
  user: User;
  postUserAuth: (body: Login) => Promise<void>;
};

export const AccessAndAuthContext = createContext<PropsAccessAndAuthContext>(
  {} as PropsAccessAndAuthContext
);

export const useAccessAndAuthContext = (): PropsAccessAndAuthContext =>
  useContext(AccessAndAuthContext);

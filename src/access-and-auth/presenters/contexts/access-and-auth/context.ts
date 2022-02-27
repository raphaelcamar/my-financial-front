import { createContext, useContext } from 'react';
import { UserLogin, User } from '@/access-and-auth/domain';

type PropsAccessAndAuthContext = {
  user: User;
  postUserAuth: (body: UserLogin) => Promise<void>;
};

export const AccessAndAuthContext = createContext<PropsAccessAndAuthContext>({} as PropsAccessAndAuthContext);

export const useAccessAndAuthContext = (): PropsAccessAndAuthContext => useContext(AccessAndAuthContext);

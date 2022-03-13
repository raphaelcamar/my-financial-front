import { createContext, useContext } from 'react';
import { UserLogin, User, UserSubscribe } from '@/access-and-auth/domain';

type PropsAccessAndAuthContext = {
  user: User;
  userAuth: (body: UserLogin) => Promise<void>;
  newUser: (body: UserSubscribe) => Promise<void>;
  verifyUserAuth: () => User;
};

export const AccessAndAuthContext = createContext<PropsAccessAndAuthContext>({} as PropsAccessAndAuthContext);

export const useAccessAndAuthContext = (): PropsAccessAndAuthContext => useContext(AccessAndAuthContext);

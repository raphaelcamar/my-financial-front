import { createContext, useContext } from 'react';
import { User } from '@/access-and-auth/domain';

type PropsAccessAndAuthContext = {
  user: User;
  userAuth: (body: User.Login) => Promise<void>;
  newUser: (body: User.Subscribe) => Promise<void>;
  verifyUserAuth: () => Promise<User>;
};

export const AccessAndAuthContext = createContext<PropsAccessAndAuthContext>({} as PropsAccessAndAuthContext);

export const useAccessAndAuthContext = (): PropsAccessAndAuthContext => useContext(AccessAndAuthContext);

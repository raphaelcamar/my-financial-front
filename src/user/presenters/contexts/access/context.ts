import { createContext, useContext } from 'react';
import { User, Wallet } from '@/user/domain';

type PropsAccessContext = {
  user: User;
  passwordToken: string;
  currentWallet: Wallet;
  walletValue: number;
  userAuth: (body: User.Login) => Promise<void>;
  newUser: (body: User.Subscribe) => Promise<void>;
  verifyUserAuth: () => Promise<User>;
  verifyInCache: () => boolean;
  recoverPassworSendEmail: (email: string) => Promise<void>;
  sendNewPassword: (password: string) => Promise<void>;
  sendCodeRecover: (code: string) => Promise<void>;
  logout: () => void;
  setNewWalletValue: (newValue: number) => void;
  changeWallet: (walletId: string) => void;
};

export const AccessContext = createContext<PropsAccessContext>({} as PropsAccessContext);

export const useAccessContext = (): PropsAccessContext => useContext(AccessContext);

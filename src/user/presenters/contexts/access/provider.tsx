import React, { useEffect, useReducer } from 'react';
import { AccessRepositoryData } from '@/user/infra';
import { AccessContext } from './context';
import { initialState, reducer } from './reducers';
import { User } from '@/user/domain';
import { LocalStorageRepository } from '@/core/infra/cache';
import {
  AuthenticateUser,
  CreateUser,
  VerifySession,
  SendRecoverPasswordEmail,
  SendNewPasswordRecover,
  SendCodePassowrdRecover,
} from '@/user/data/use-cases/access';
import { fetchLogin, fetchEmailPasswordRecover, fetchLogout } from './actions';

export const AccessProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const verifyUserAuth = async (): Promise<User> => {
    const localStorageRepository = new LocalStorageRepository();
    const accessRepository = new AccessRepositoryData();

    const useCase = new VerifySession(localStorageRepository, accessRepository);
    const user = await useCase.execute();

    return new User(user);
  };

  const verifyInCache = (): boolean => {
    const localStorageRepository = new LocalStorageRepository();
    const user = localStorageRepository.get<User>('@user');
    return Boolean(user);
  };

  useEffect(() => {
    async function verify() {
      try {
        const user = await verifyUserAuth();
        if (user) dispatch(fetchLogin(user));
      } catch (err) {
        dispatch(fetchLogin(null));
      }
    }
    verify();
  }, []);

  const getStorageEvent = (event: StorageEvent) => {
    if (event.type === 'storage') {
      const localStorageRepository = new LocalStorageRepository();
      const user = localStorageRepository.get<User>('@user');
      dispatch(fetchLogin(user));
    }
  };

  useEffect(() => {
    window.addEventListener('storage', getStorageEvent);

    return () => window.removeEventListener('storage', getStorageEvent);
  }, []);

  const userAuth = async (loginData: User.Login): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();

    const useCase = new AuthenticateUser(accessRepository, localStorageRepository, loginData);
    const user = await useCase.execute();

    dispatch(fetchLogin(user));
  };

  const newUser = async (subscribeData: User.Subscribe): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();

    const useCase = new CreateUser(accessRepository, localStorageRepository, subscribeData);
    const user = await useCase.execute();

    dispatch(fetchLogin(user));
  };

  const recoverPassworSendEmail = async (email: string): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const useCase = new SendRecoverPasswordEmail(accessRepository, email);

    dispatch(fetchEmailPasswordRecover(email));

    await useCase.execute();
  };

  const sendCodeRecover = async (code: string): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const useCase = new SendCodePassowrdRecover(accessRepository, state.emailPasswordRecover, code);

    await useCase.execute();
  };

  const sendNewPassword = async (password: string): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const useCase = new SendNewPasswordRecover(accessRepository, password, state?.emailPasswordRecover);
    await useCase.execute();
  };

  const logout = () => {
    const localStorageRepository = new LocalStorageRepository();
    localStorageRepository.clearAll();
    dispatch(fetchLogout(null));
  };

  return (
    <AccessContext.Provider
      value={{
        user: state.user,
        passwordToken: state.emailPasswordRecover,
        userAuth,
        newUser,
        verifyUserAuth,
        verifyInCache,
        recoverPassworSendEmail,
        sendNewPassword,
        sendCodeRecover,
        logout,
      }}
    >
      {children}
    </AccessContext.Provider>
  );
};

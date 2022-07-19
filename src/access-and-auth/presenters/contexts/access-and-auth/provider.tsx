import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { AccessRepositoryData } from '@/access-and-auth/infra';
import { AccessAndAuthContext } from './context';
import { initialState, reducer } from './reducers';
import { User } from '@/access-and-auth/domain';
import { LocalStorageRepository } from '@/core/infra/cache';
import {
  AuthenticateUser,
  CreateUser,
  VerifySession,
  SendRecoverPasswordEmail,
  SendNewPasswordRecover,
  SendCodePassowrdRecover,
} from '@/access-and-auth/data';
import { fetchUserAuth, fetchEmailPasswordRecover, fetchLogout } from './actions';
import { HttpErrorStatusCode } from '@/core/data';

export const AccessAndAuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const verifyUserAuth = async (): Promise<User> => {
    const localStorageRepository = new LocalStorageRepository();
    const accessRepository = new AccessRepositoryData();

    const useCase = new VerifySession(localStorageRepository, accessRepository);
    const user = useCase.execute();

    return user;
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
        if (user) dispatch(fetchUserAuth(user));
      } catch (err) {
        if (err?.status === HttpErrorStatusCode.UNAUTHORIZED) {
          navigate('/login', { replace: true });

          const localStorageRepository = new LocalStorageRepository();
          localStorageRepository.clearAll();

          enqueueSnackbar('Sessão expirada. Faça login novamente para continuar', {
            variant: 'info',
          });
        }

        dispatch(fetchUserAuth(null));
      }
    }
    verify();
  }, []);

  const userAuth = async (loginData: User.Login): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();

    const useCase = new AuthenticateUser(accessRepository, localStorageRepository, loginData);
    const user = await useCase.execute();

    dispatch(fetchUserAuth(user));
  };

  const newUser = async (subscribeData: User.Subscribe): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();

    const useCase = new CreateUser(accessRepository, localStorageRepository, subscribeData);
    const user = await useCase.execute();

    dispatch(fetchUserAuth(user));
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
    <AccessAndAuthContext.Provider
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
    </AccessAndAuthContext.Provider>
  );
};

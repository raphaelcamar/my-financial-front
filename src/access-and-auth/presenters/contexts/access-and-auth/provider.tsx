import React, { useEffect, useReducer } from 'react';
import { AccessRepositoryData } from '@/access-and-auth/infra';
import { AccessAndAuthContext } from './context';
import { initialState, reducer } from './reducers';
import { User } from '@/access-and-auth/domain/entities';
import { LocalStorageRepository } from '@/access-and-auth/infra/cache';
import { AuthenticateUser, CreateUser, VerifySession } from '@/access-and-auth/data';
import { fetchUserAuth } from './actions';

export const AccessAndAuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const verifyUserAuth = (): User => {
    const localStorageRepository = new LocalStorageRepository<User>();
    const useCase = new VerifySession<User>(localStorageRepository);
    const user = useCase.execute();
    return user;
  };

  useEffect(() => {
    const user = verifyUserAuth();
    if (user) dispatch(fetchUserAuth(user));
  }, []);

  const userAuth = async (loginData: User.Login): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository<User>();
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

  return (
    <AccessAndAuthContext.Provider value={{ user: state.user, userAuth, newUser, verifyUserAuth }}>
      {children}
    </AccessAndAuthContext.Provider>
  );
};

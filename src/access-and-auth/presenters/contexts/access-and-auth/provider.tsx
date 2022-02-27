import React, { useReducer } from 'react';
import { AccessRepositoryData } from '@/access-and-auth/infra';
import { AccessAndAuthContext } from './context';
import { initialState, reducer } from './reducers';
import { UserLogin, UserSubscribe } from '@/access-and-auth/domain';
import { LocalStorageRepository } from '@/access-and-auth/infra/cache';
import { AuthenticateUser, CreateUser } from '@/access-and-auth/data';
import { fetchUserAuth } from './actions';

export const AccessAndAuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userAuth = async (loginData: UserLogin): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();
    const authenticateUser = new AuthenticateUser(accessRepository, localStorageRepository, loginData);

    const user = await authenticateUser.execute();
    dispatch(fetchUserAuth(user));
  };

  const newUser = async (subscribeData: UserSubscribe): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();
    const createUser = new CreateUser(accessRepository, localStorageRepository, subscribeData);

    const user = await createUser.execute();
    dispatch(fetchUserAuth(user));
  };

  return (
    <AccessAndAuthContext.Provider value={{ user: state.user, userAuth, newUser }}>
      {children}
    </AccessAndAuthContext.Provider>
  );
};

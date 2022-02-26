import React, { useReducer } from 'react';
import { AccessRepositoryData } from '@/access-and-auth/infra';
import { AccessAndAuthContext } from './context';
import { initialState, reducer } from './reducers';
import { Login } from '@/access-and-auth/domain';
import { LocalStorageRepository } from '@/access-and-auth/infra/cache';
import { AuthenticateUser } from '@/access-and-auth/data';
import { fetchUserAuth } from './actions';

export const AccessAndAuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const postUserAuth = async (loginData: Login): Promise<void> => {
    const accessRepository = new AccessRepositoryData();
    const localStorageRepository = new LocalStorageRepository();
    const authenticateUser = new AuthenticateUser(
      accessRepository,
      localStorageRepository,
      loginData
    );

    const user = await authenticateUser.execute();
    dispatch(fetchUserAuth(user));
  };

  return (
    <AccessAndAuthContext.Provider value={{ user: state.user, postUserAuth }}>
      {children}
    </AccessAndAuthContext.Provider>
  );
};

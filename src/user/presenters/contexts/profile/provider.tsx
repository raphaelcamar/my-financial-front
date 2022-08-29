import React, { PropsWithChildren, useReducer } from 'react';
import { UpdatePicture } from '@/user/data/use-cases/profile';
import { ProfileRepositoryData } from '@/user/infra';
import { ProfileContext } from './context';
import { initialState, reducer } from './reducers';
import { fetchNewUserProfile } from './actions';
import { LocalStorageRepository } from '@/core/infra';
import { User } from '@/user/domain';

interface IProfileProvider {
  user?: User;
}

export const ProfileProvider = ({ children }: PropsWithChildren<IProfileProvider>): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updatePicture = async (picture: Blob): Promise<void> => {
    const profileRepository = new ProfileRepositoryData();
    const cacheRepository = new LocalStorageRepository();

    const useCase = new UpdatePicture(cacheRepository, profileRepository, picture);

    const result = await useCase.execute();

    dispatch(fetchNewUserProfile(result));
  };

  return <ProfileContext.Provider value={{ user: state.user, updatePicture }}>{children}</ProfileContext.Provider>;
};

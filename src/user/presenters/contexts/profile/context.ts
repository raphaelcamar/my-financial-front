import { User } from '@/user/domain';
import { createContext, useContext } from 'react';

type PropsProfileContext = {
  user: User;
  updatePicture: (picture: Blob) => Promise<void>;
};

export const ProfileContext = createContext<PropsProfileContext>({} as PropsProfileContext);

export const useProfileContext = (): PropsProfileContext => useContext(ProfileContext);

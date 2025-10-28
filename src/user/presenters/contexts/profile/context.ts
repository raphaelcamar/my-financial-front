import { User } from '@/user/domain';

type PropsProfileContext = {
  user: User;
  updatePicture: (picture: Blob) => Promise<void>;
};

export const ProfileContext = createContext<PropsProfileContext>({} as PropsProfileContext);

export const useProfileContext = (): PropsProfileContext => useContext(ProfileContext);

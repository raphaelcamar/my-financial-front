import React from 'react';
import { useAccessContext } from '@/user/presenters/contexts/access';
import { BackgroundCardProfile } from '@/user/ui/components/atoms';
import { BodyInformationCard } from '@/user/ui/components/molecules';
import { useProfileContext } from '@/user/presenters/contexts/profile';

export const ContainerProfile: React.FC = () => {
  const { user } = useAccessContext();
  const { updatePicture } = useProfileContext();

  return (
    <div>
      <BackgroundCardProfile />
      <BodyInformationCard user={user} updatePicture={updatePicture} />
    </div>
  );
};

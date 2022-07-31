import React from 'react';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters';
import { BackgroundCardProfile } from '@/profile/ui/components/atoms';
import { BodyInformationCard } from '@/profile/ui/components/molecules';

export const ContainerProfile: React.FC = () => {
  const { user } = useAccessAndAuthContext();

  return (
    <div>
      <BackgroundCardProfile />
      <BodyInformationCard user={user} />
    </div>
  );
};

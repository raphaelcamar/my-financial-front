import React from 'react';
import { useAccessContext } from '@/user/presenters/contexts/access';
import { BackgroundCardProfile } from '@/user/ui/components/atoms';
import { BodyInformationCard } from '@/user/ui/components/molecules';

export const ContainerProfile: React.FC = () => {
  const { user } = useAccessContext();

  return (
    <div>
      <BackgroundCardProfile />
      <BodyInformationCard user={user} />
    </div>
  );
};

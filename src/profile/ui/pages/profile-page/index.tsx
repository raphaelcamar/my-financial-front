import React from 'react';
import { BackgroundCardProfile } from '@/profile/ui/components/atoms';
import { Container } from './styles';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters';
import { BodyInformationCard } from '@/profile/ui/components/molecules';

export const ProfilePage: React.FC = () => {
  const { user } = useAccessAndAuthContext();

  return (
    <Container>
      <div>
        <BackgroundCardProfile />
        <BodyInformationCard user={user} />
      </div>
    </Container>
  );
};

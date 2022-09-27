import React from 'react';
import { Container } from './styles';
import { ContainerProfile } from '@/user/ui/components/organisms';
import { ProfileProvider } from '@/user/presenters/contexts/profile';

export const ProfilePage: React.FC = () => (
  <ProfileProvider>
    <Container>
      <ContainerProfile />
    </Container>
  </ProfileProvider>
);

export default ProfilePage;

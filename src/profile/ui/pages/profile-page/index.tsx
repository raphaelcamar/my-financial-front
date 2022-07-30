import React from 'react';
import { Avatar } from '@/core/ui/components/atoms';
import { BackgroundCardProfile, CardProfile } from '../../components/atoms';
import { Container, StyledInputBase, Inputs, SpaceInputs } from './styles';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters';
import { differenceInYearsDate } from '@/core/utils';

export const ProfilePage: React.FC = () => {
  const { user } = useAccessAndAuthContext();

  return (
    <Container>
      <div>
        <BackgroundCardProfile />
        <CardProfile>
          <div style={{ marginTop: -82, display: 'flex', justifyContent: 'center' }}>
            <Avatar size={112} url={user?.pictureUrl || user?.name} />
          </div>
          <Inputs>
            <StyledInputBase readOnly value={`${user?.name} ${user?.lastname}`} />
            <StyledInputBase readOnly value={`${user?.email}`} />
            <SpaceInputs grid="1fr 1fr">
              <StyledInputBase readOnly value={`${user?.profession || '-'}`} />
              <StyledInputBase readOnly value={`${user?.salary || '-'}`} />
            </SpaceInputs>
            <SpaceInputs grid="2fr 1fr">
              <StyledInputBase readOnly value={`${user?.birthDate || '-'}`} />
              <StyledInputBase readOnly value={differenceInYearsDate(user?.birthDate, new Date()) || '-'} />
            </SpaceInputs>
          </Inputs>
        </CardProfile>
      </div>
    </Container>
  );
};

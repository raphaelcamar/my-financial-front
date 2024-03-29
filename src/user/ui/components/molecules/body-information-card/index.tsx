import React from 'react';
import { User } from '@/user/domain';
import { Inputs, SpaceInputs, StyledInputBase, AvatarPosition } from './styles';
import { Avatar } from '@/core/ui/components/molecules';
import { CardProfile } from '@/user/ui/components/atoms';

import { differenceInYearsDate, formatCurrencyDefault, formatDateBR } from '@/core/utils';

interface IBodyInformationCard {
  user: User;
  updatePicture: (picture: Blob) => Promise<void>;
}

export const BodyInformationCard: React.FC<IBodyInformationCard> = ({ user, updatePicture }) => (
  <>
    {user ? (
      <CardProfile>
        <AvatarPosition>
          <Avatar chooseAvatar size={112} url={user?.pictureUrl || user?.name} updatePicture={updatePicture} />
        </AvatarPosition>
        <Inputs>
          <StyledInputBase readOnly value={`${user?.name} ${user?.lastname}`} />
          <StyledInputBase readOnly value={user?.getFieldOrEmpty('email')} />
          <SpaceInputs grid="1fr 1fr">
            <StyledInputBase readOnly value={user?.getFieldOrEmpty('profession')} />
            <StyledInputBase readOnly value={formatCurrencyDefault(user?.getFieldOrEmpty('salary'))} />
          </SpaceInputs>
          <SpaceInputs grid="2fr 1fr">
            <StyledInputBase readOnly value={formatDateBR(user?.birthDate ? String(user.birthDate) : null) || '-'} />
            <StyledInputBase readOnly value={differenceInYearsDate(user?.birthDate, new Date()) || '-'} />
          </SpaceInputs>
        </Inputs>
      </CardProfile>
    ) : (
      <></>
    )}
  </>
);

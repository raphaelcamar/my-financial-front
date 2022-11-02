/* eslint-disable no-empty-pattern */
import React, { PropsWithChildren, ReactElement } from 'react';
import { NotistackProvider, StyledThemeProvider } from '@/core/presenters/contexts';
import { AccessProvider } from '@/user/presenters';
import { UserMockBuilder } from '@/user/mocks';
import 'jest-localstorage-mock';

export const MockProviders = ({ children }: PropsWithChildren<unknown>): ReactElement => {
  localStorage.setItem('@user', JSON.stringify(new UserMockBuilder().user));
  return (
    <StyledThemeProvider>
      <NotistackProvider>
        <AccessProvider>{children}</AccessProvider>
      </NotistackProvider>
    </StyledThemeProvider>
  );
};

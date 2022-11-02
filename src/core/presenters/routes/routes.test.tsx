/* eslint-disable @typescript-eslint/no-empty-function */
import { render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import crypto from 'crypto';
import { MockProviders } from '@/core/tests/mocks';
import { RootRoutesComponent } from '.';
import '@testing-library/jest-dom';
import 'jest-localstorage-mock';

beforeEach(() => {
  Object.defineProperty(global.self, 'crypto', {
    value: {
      getRandomValues: arr => crypto.randomBytes(arr.length * 2),
    },
  });
});

describe('Routing tests', () => {
  test('Should be able to render the login page', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <RootRoutesComponent />
      </MemoryRouter>,
      { wrapper: MockProviders }
    );

    await waitFor(() => expect(screen.getByTestId('login-page')).toBeInTheDocument());
  });

  test('Should be able to render the main page, with header and sidebar', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RootRoutesComponent />
      </MemoryRouter>,
      { wrapper: MockProviders }
    );

    await waitFor(() => expect(screen.getByTestId('header')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeInTheDocument());
  });
});

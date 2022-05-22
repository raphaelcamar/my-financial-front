import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProvideTheme } from '@/core/tests/mocks';
import { Icon } from '.';

describe('Icon unit test', () => {
  test('Should be able to render the add icon', () => {
    render(ProvideTheme(<Icon icon="add" />));

    const icon = screen.getByTestId('add');

    expect(icon).toBeInTheDocument();
  });
});

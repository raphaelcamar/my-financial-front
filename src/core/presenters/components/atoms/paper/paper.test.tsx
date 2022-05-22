import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ProvideTheme } from '@/core/tests/mocks';
import { Paper } from '.';

describe('Paper unit test', () => {
  it('Should be able to render the paper, with the variant lowShadow', () => {
    render(ProvideTheme(<Paper density="lowShadow">Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 1px 4px 0px #00000040');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with the variant highShadow', () => {
    render(ProvideTheme(<Paper density="highShadow">Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 4px 0px #00000040');
    expect(paper).toHaveTextContent('Teste');
  });
});

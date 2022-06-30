import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ProvideTheme } from '@/core/tests/mocks';
import { Paper } from '.';

describe('Paper unit test', () => {
  it('Should be able to render the paper, with no boxShadow', () => {
    render(ProvideTheme(<Paper density={0}>Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: none');
    expect(paper).toHaveStyle('padding: 16px 12px');
    expect(paper).toHaveStyle('border-radius: 12px');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with the variant 1', () => {
    render(ProvideTheme(<Paper density={1}>Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 16px 12px');
    expect(paper).toHaveStyle('border-radius: 12px');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with the variant 2', () => {
    render(ProvideTheme(<Paper density={2}>Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 16px 12px');
    expect(paper).toHaveStyle('border-radius: 12px');
    expect(paper).toHaveTextContent('Teste');
  });
});

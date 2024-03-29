import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ProvideStyledTheme } from '@/core/tests/mocks';
import { Paper } from '.';

describe('Paper unit test', () => {
  it('Should be able to render the paper, with no boxShadow', () => {
    render(ProvideStyledTheme(<Paper density={0}>Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: none');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius: 12px');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with the variant 1', () => {
    render(ProvideStyledTheme(<Paper density={1}>Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius: 12px');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with the variant 2', () => {
    render(ProvideStyledTheme(<Paper density={2}>Teste</Paper>));

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius: 12px');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with no radius in top', () => {
    render(
      ProvideStyledTheme(
        <Paper density={2} noRadiusIn="top">
          Teste
        </Paper>
      )
    );

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius: 0px 0px 12px 12px');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with no radius in bottom', () => {
    render(
      ProvideStyledTheme(
        <Paper density={2} noRadiusIn="bottom">
          Teste
        </Paper>
      )
    );

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius:12px 12px 0px 0px;');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with no radius in bottom', () => {
    render(
      ProvideStyledTheme(
        <Paper density={2} noRadiusIn="left">
          Teste
        </Paper>
      )
    );

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius: 0px 12px 12px 0;');
    expect(paper).toHaveTextContent('Teste');
  });

  it('Should be able to render the paper, with no radius in bottom', () => {
    render(
      ProvideStyledTheme(
        <Paper density={2} noRadiusIn="right">
          Teste
        </Paper>
      )
    );

    const paper = screen.getByTestId('paper');
    expect(paper).toHaveStyle('box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.25)');
    expect(paper).toHaveStyle('padding: 24px');
    expect(paper).toHaveStyle('border-radius: 12px 0 0 12px;');
    expect(paper).toHaveTextContent('Teste');
  });
});

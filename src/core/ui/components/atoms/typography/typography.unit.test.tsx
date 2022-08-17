import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { mainTheme as theme } from '@/core/presenters/contexts/styled-theme/themes/main';
import { Typography } from '.';
import { ProvideStyledTheme } from '@/core/tests/mocks';

describe('Typography unit tests', () => {
  test('Should be able to render Typography component with default styles', () => {
    const { getByText } = render(ProvideStyledTheme(<Typography>Test</Typography>));

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.grey[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[400]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.normal}`);
    expect(getByText(/Test/i)).toBeInTheDocument();
  });

  test('Should be able to render Typography component with grey color, large size and weight 100', () => {
    render(
      ProvideStyledTheme(
        <Typography color="grey" size="large" weight={100}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.grey[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[100]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.large}`);
  });

  test('Should be able to render Typography component with error color, normal size and weight 200', () => {
    render(
      ProvideStyledTheme(
        <Typography color="error" size="normal" weight={200}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.error[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[200]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.normal}`);
  });

  test('Should be able to render Typography component with grey color, small size and weight 300', () => {
    render(
      ProvideStyledTheme(
        <Typography color="grey" size="small" weight={300}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.grey[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[300]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.small}`);
  });

  test('Should be able to render Typography component with info color, xlarge size and weight 400', () => {
    render(
      ProvideStyledTheme(
        <Typography color="info" size="xlarge" weight={400}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.info[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[400]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.xlarge}`);
  });

  test('Should be able to render Typography component with primary color, xsmall size and weight 500', () => {
    render(
      ProvideStyledTheme(
        <Typography color="primary" size="xsmall" weight={500}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.primary[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[500]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.xsmall}`);
  });

  test('Should be able to render Typography component with grey 200 color, xxlarge size and weight 600', () => {
    render(
      ProvideStyledTheme(
        <Typography color="grey" shade={200} size="xxlarge" weight={600}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.grey[200]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[600]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.xxlarge}`);
  });

  test('Should be able to render Typography component with success color, xxxlarge size and weight 700', () => {
    render(
      ProvideStyledTheme(
        <Typography color="success" size="xxxlarge" weight={700}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.success[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[700]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.xxxlarge}`);
  });

  test('Should be able to render Typography component with warning color, normal size and weight 800', () => {
    render(
      ProvideStyledTheme(
        <Typography color="warning" size="normal" weight={800}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.warning[500]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[800]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.normal}`);
  });

  test('Should be able to render Typography component with grey 50, normal size and weight 900', () => {
    render(
      ProvideStyledTheme(
        <Typography color="grey" shade={50} size="normal" weight={900}>
          Test
        </Typography>
      )
    );

    const typography = screen.getByTestId('typography');

    expect(typography).toHaveStyle(`color: ${theme.palette.grey[50]}`);
    expect(typography).toHaveStyle(`font-weight: ${theme.font.weight[900]}`);
    expect(typography).toHaveStyle(`font-size: ${theme.font.size.normal}`);
  });
});

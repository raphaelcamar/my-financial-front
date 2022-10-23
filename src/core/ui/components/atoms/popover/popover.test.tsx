import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { ProvideStyledTheme } from '@/core/tests/mocks';
import { Popover } from '.';

describe('Popover - Unit test', () => {
  test('Should be able to render the popover element, with all attributes', () => {
    render(
      ProvideStyledTheme(
        <Popover displayElement={<div data-testid="some-element">Some text</div>}>
          <section data-testid="content">Some content</section>
        </Popover>
      )
    );

    const popover = screen.getByTestId('menu') as HTMLDivElement;
    const displayElement = screen.getByTestId('some-element') as HTMLDivElement;
    const content = screen.getByTestId('content');

    expect(popover).toBeInTheDocument();
    expect(displayElement).toBeInTheDocument();
    expect(content).not.toBeInTheDocument();

    fireEvent(
      popover,
      new MouseEvent('click', {
        cancelable: false,
        bubbles: true,
      })
    );

    expect(content).toBeInTheDocument();
  });
});

/* eslint-disable jsx-a11y/control-has-associated-label */
// TODO
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ClickAwayListener } from '.';
import '@testing-library/jest-dom';

describe('ClickAwayListener - Unit test', () => {
  test('Should be able to click away from div', () => {
    let outsideClick = false;
    render(
      <div data-testid="click-away">
        <ClickAwayListener
          onClickAway={() => {
            outsideClick = true;
          }}
        >
          <button
            type="button"
            data-testid="click-here"
            onClick={() => {
              outsideClick = false;
            }}
          />
        </ClickAwayListener>
      </div>
    );

    const clickAwayDiv = screen.getByTestId('click-away');
    const insideClick = screen.getByTestId('click-here');

    expect(outsideClick).toBeFalsy();

    fireEvent.click(insideClick);

    expect(outsideClick).toBeTruthy();
  });
});

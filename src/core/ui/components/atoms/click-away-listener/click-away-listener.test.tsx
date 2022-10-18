/* eslint-disable jsx-a11y/control-has-associated-label */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ClickAwayListener } from '.';
import '@testing-library/jest-dom';

const makeSut = (clickAwayTestId: string, buttonTestId: string) => {
  const onClickAway = jest.fn();
  const buttonClick = jest.fn();

  const renderMethod = render(
    <div data-testid={clickAwayTestId}>
      <ClickAwayListener onClickAway={onClickAway}>
        <button data-testid={buttonTestId} type="button" onClick={buttonClick}>
          Test button
        </button>
      </ClickAwayListener>
    </div>
  );

  return {
    onClickAway,
    buttonClick,
    renderMethod,
  };
};

describe('ClickAwayListener - Unit test', () => {
  test('Should be able to click at the button, outside of a div and trigger the onClickAway', () => {
    const clickAwayTestId = 'clickAway';
    const buttonTestId = 'button-test';

    const { onClickAway } = makeSut(clickAwayTestId, buttonTestId);

    const clickAwayDiv = screen.getByTestId(clickAwayTestId);
    const button = screen.getByTestId(buttonTestId);

    fireEvent(
      button,
      new MouseEvent('click', {
        cancelable: false,
        bubbles: true,
      })
    );

    fireEvent(
      clickAwayDiv,
      new MouseEvent('mousedown', {
        cancelable: false,
        bubbles: true,
      })
    );

    expect(onClickAway.mock.calls.length).toBe(1);
  });
  test('Should be able to click inside of the div and dont trigger the onClickAway', () => {
    const clickAwayTestId = 'clickAway';
    const buttonTestId = 'button-test';

    const { buttonClick, onClickAway } = makeSut(clickAwayTestId, buttonTestId);

    const button = screen.getByTestId(buttonTestId);

    fireEvent(
      button,
      new MouseEvent('click', {
        cancelable: false,
        bubbles: true,
      })
    );

    expect(buttonClick.mock.calls.length).toBe(1);
    expect(onClickAway.mock.calls.length).toBe(0);
  });
});

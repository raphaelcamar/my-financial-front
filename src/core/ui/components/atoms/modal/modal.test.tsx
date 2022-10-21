import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ProvideStyledTheme } from '@/core/tests/mocks';
import { Modal } from '.';
import '@testing-library/jest-dom';

const makeSut = () => {
  const closeModal = jest.fn();

  return {
    closeModal,
  };
};

describe('Modal - Unit test', () => {
  test('Should be able to render the modal propely with title and children', () => {
    const { closeModal } = makeSut();

    const TEXT_CHILDREN = 'Test children';

    render(
      ProvideStyledTheme(
        <Modal title="test" open closeModal={closeModal}>
          <h1>{TEXT_CHILDREN}</h1>
        </Modal>
      )
    );

    const text = screen.getByText('test');
    const modal = screen.getByTestId('modal-container');
    const h1Text = screen.getByText(TEXT_CHILDREN);

    expect(modal).toBeInTheDocument();
    expect(text).toBeDefined();
    expect(h1Text).toBeInTheDocument();
  });

  test('Should be able to render the modal propely', () => {
    const { closeModal } = makeSut();

    render(ProvideStyledTheme(<Modal open closeModal={closeModal} />));

    const modal = screen.getByTestId('modal-container');
    expect(modal).toBeInTheDocument();
  });

  test('Should not be able to render the modal, because its closed', () => {
    const { closeModal } = makeSut();

    render(ProvideStyledTheme(<Modal open={false} closeModal={() => closeModal} />));

    const modal = screen.getByTestId('modal-container');
    expect(modal).not.toBeVisible();
  });

  test('Should be able to pass the closeModal function properly', () => {
    let isTrue = true;
    const closeModal = () => {
      isTrue = false;
    };

    render(ProvideStyledTheme(<Modal open={false} closeModal={closeModal} />));

    const buttonClose = screen.getByTestId('icon-button-modal');

    expect(isTrue).toBeTruthy();

    fireEvent(
      buttonClose,
      new MouseEvent('click', {
        cancelable: false,
        bubbles: true,
      })
    );

    expect(isTrue).toBeFalsy();
  });
});

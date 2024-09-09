import React, { ReactNode } from 'react';

const defaultProps = {
  fallback: <></>,
};

type IConditionalSlot = {
  renderIf: boolean;
  fallback: ReactNode;
  children: ReactNode;
};

export const ConditionalSlot = ({ renderIf, fallback, children }: IConditionalSlot) => (
  <>{renderIf ? children : fallback}</>
);

ConditionalSlot.defaultProps = defaultProps;

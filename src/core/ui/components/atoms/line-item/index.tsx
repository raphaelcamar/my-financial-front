import React, { PropsWithChildren, ReactElement } from 'react';
import { LinkProps } from 'react-router-dom';
import { Line, StyledLink } from './styles';

const defaultProps = {
  to: '/',
};

type ILineItem = Partial<LinkProps> &
  typeof defaultProps & {
    linkable?: boolean;
  };

export const LineItem = ({ children, linkable, ...props }: PropsWithChildren<ILineItem>): ReactElement => {
  if (linkable) {
    return (
      <StyledLink {...props}>
        <Line>{children}</Line>
      </StyledLink>
    );
  }

  return <Line data-testid="line-item">{children}</Line>;
};

LineItem.defaultProps = defaultProps;

import React, { forwardRef, useState } from 'react';
import { IInput, Input } from '@/core/presenters/components/molecules';
import { Icon } from '@/core/presenters/components/atoms';
import { WrapperIcon } from './styles';

type IInputPassword = IInput;

export const InputPassword = forwardRef<HTMLInputElement, IInputPassword>(({ ...props }, ref) => {
  const [openEye, setOpenEye] = useState<boolean>(false);

  return (
    <Input
      {...props}
      type={openEye ? 'text' : 'password'}
      actionEnd={
        <WrapperIcon style={{ cursor: 'pointer' }} aria-hidden="true" onClick={() => setOpenEye(!openEye)}>
          <Icon icon={openEye ? 'openEye' : 'closeEye'} />
        </WrapperIcon>
      }
      ref={ref}
    />
  );
});

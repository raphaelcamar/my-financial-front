import React, { useState } from 'react';
import { Input, InputProps } from '@/core/presenters/components/molecules';
import { dateMask } from '@/core/presenters/utils/input-masks';

type AvailableMasks = 'date';

// @token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmRmMDMwZGUzYWMyMzQ1NDk5MWEyMiIsIm5hbWUiOiJSYXBoYWVsIiwibGFzdG5hbWUiOiJTYW50YW50b25pbyIsImVtYWlsIjoicmFwaGFlbC5jYW1hckBvdXRsb29rNi5jb20iLCJwYXNzd29yZCI6IkdJQ2lXeDhva0ZaaWJQWkRWdmZPRTlQZkVFb3FnZzhMUy9jUUU1VERsTUU9IiwiaWF0IjoxNjQ4Njg0MzA2LCJleHAiOjE2NDg3NzA3MDZ9.nyIzQwijR2biDLGFR8hmGpHCln6JYm18b0uEj4gmpmU"
// @user: {"_id":"622df030de3ac23454991a22","name":"Raphael","lastname":"Santantonio","email":"raphael.camar@outlook6.com","createdAt":"2022-03-13T13:22:56.136Z","updatedAt":"2022-03-30T23:51:46.474Z","__v":0,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmRmMDMwZGUzYWMyMzQ1NDk5MWEyMiIsIm5hbWUiOiJSYXBoYWVsIiwibGFzdG5hbWUiOiJTYW50YW50b25pbyIsImVtYWlsIjoicmFwaGFlbC5jYW1hckBvdXRsb29rNi5jb20iLCJwYXNzd29yZCI6IkdJQ2lXeDhva0ZaaWJQWkRWdmZPRTlQZkVFb3FnZzhMUy9jUUU1VERsTUU9IiwiaWF0IjoxNjQ4Njg0MzA2LCJleHAiOjE2NDg3NzA3MDZ9.nyIzQwijR2biDLGFR8hmGpHCln6JYm18b0uEj4gmpmU"}
interface IInputMask extends InputProps {
  validator: boolean;
  messageValidator: string;
  mask: AvailableMasks;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// TODO refactor for better
export const InputMask: React.FC<IInputMask> = ({ validator, messageValidator, label, onChange, mask }) => {
  const [v, setV] = useState(null);

  const handleChangeInput = (e: any): void => {
    console.log(e);
    const retorno = dateMask(e);
    console.log(retorno);
    onChange(retorno);
  };
  return (
    <Input
      label={label}
      messageValidator={messageValidator}
      validator={validator}
      onChange={e => handleChangeInput(e)}
    />
  );
};

import React from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  CheckboxProps,
} from '@mui/material';

export type StyledCheckboxProps = {
  props: CheckboxProps;
  label: string;
};

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({ props, label }) =>
  label ? (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...props} />} label={label} />
    </FormGroup>
  ) : (
    <Checkbox {...props} />
  );
export default StyledCheckbox;

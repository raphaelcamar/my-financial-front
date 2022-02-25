import React from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  CheckboxProps,
} from '@mui/material';

export type StyledCheckboxProps = CheckboxProps & {
  label: string;
  props?: CheckboxProps;
};

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({ label, props }) => (
  <>
    {label ? (
      <FormGroup>
        <FormControlLabel control={<Checkbox {...props} />} label={label} />
      </FormGroup>
    ) : (
      <Checkbox {...props} />
    )}
  </>
);
export default StyledCheckbox;

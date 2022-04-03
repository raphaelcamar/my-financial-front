import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  variantSuccess: {
    backgroundColor: `${theme.palette.success.main} !important`,
  },
  variantError: {
    backgroundColor: `${theme.palette.error.main} !important`,
  },
  variantInfo: {
    backgroundColor: `${theme.palette.info.main} !important`,
  },
  variantWarning: {
    backgroundColor: `${theme.palette.warning.main} !important`,
  },
}));

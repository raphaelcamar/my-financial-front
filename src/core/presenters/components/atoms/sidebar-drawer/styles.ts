import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { SIZES } from '@/core/domain';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: SIZES.width,
  },

  open: {
    width: 80,
  },
}));

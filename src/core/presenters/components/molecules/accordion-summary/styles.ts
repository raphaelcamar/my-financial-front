import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '&:hover': {
      background: theme.palette.primary[100],
    },
  },

  wrapper: {
    display: 'flex',
    gap: 18,
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    cursor: 'pointer',
    root: {
      display: 'flex',
      gap: 18,
    },
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: 8,
    },
  },

  filterSearch: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
}));

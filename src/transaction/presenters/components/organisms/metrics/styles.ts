import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '12px 0 12px 32px',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      paddingRight: 32,
    },
  },
}));

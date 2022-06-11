import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  login: {
    padding: '52px 86px',

    [theme.breakpoints.down('md')]: {
      padding: '36px 52px',
    },
  },

  container: {
    display: 'flex',
    gap: 36,
    paddingTop: 64,
    height: '100%',
    flexDirection: 'column',
  },

  wrapper: {
    height: '100%',
    width: '100%',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },

  link: {
    textAlign: 'center',
  },
}));

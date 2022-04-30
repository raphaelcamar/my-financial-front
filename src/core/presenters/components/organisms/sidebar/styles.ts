import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { SIZES } from '@/core/domain';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: SIZES.width,
    padding: 24,
    position: 'fixed',
    height: '100vh',
    borderRight: `1px solid ${theme.palette.primary[100]}`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  closed: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: SIZES.marginLeft,
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { SIZES } from '@/core/domain';

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: 48,
    background: theme.palette.grey[50],
    minHeight: '100vh',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: SIZES.width,
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: SIZES.marginLeft,
  },
}));

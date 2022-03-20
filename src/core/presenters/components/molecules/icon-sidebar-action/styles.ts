import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { SIZES } from '@/core/domain';

export const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    background: theme.palette.primary[50],
    boxShadow: theme.shadows[2],
    borderRadius: '50%',
    padding: '18px 16px',
    position: 'absolute',
    left: '0px',
    marginTop: 32,
    marginLeft: `calc(${SIZES.width}px - 18px)`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 1,
  },

  open: {
    transform: `rotate(90deg)`,
  },

  close: {
    left: 0,
    marginLeft: `calc(103px - 41px / 2)`,
    transform: `rotate(270deg)`,
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: theme.palette.grey[100],
  },

  blurred: {
    position: 'absolute',
    bottom: 0,
    height: '50vh',
    width: '100%',
    background: 'rgba(242, 244, 247, 0.32)',
    backdropFilter: 'blur(35px)',
  },

  format: {
    position: 'absolute',
    top: 'calc(50% - 442px / 2)',
    left: 'calc(50% - 442px / 2)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

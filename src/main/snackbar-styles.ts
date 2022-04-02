import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  success: {
    background: theme.palette.success.main,
    color: theme.palette.background.paper,
  },

  error: {
    background: theme.palette.error.main,
    color: theme.palette.background.paper,
  },

  warning: {
    background: theme.palette.warning.main,
    color: theme.palette.background.paper,
  },

  info: {
    background: theme.palette.info.main,
    color: theme.palette.background.paper,
  },
}));

// export const snackabarStyles = useStyles();

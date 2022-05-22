import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },

    '& .MuiTypography-body2': {
      fontSize: 16,
      fontWeight: 400,
      color: theme.palette.primary.main,
    },
  },
}));

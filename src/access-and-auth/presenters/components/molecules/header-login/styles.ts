import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  headerLogin: {
    display: 'flex',
    gap: 18,

    '& .MuiTypography-body1': {
      fontSize: 24,
      color: theme.palette.primary.main,
      fontWeight: 500,
    },

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
}));

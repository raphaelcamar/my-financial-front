import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapperHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    '& .MuiTypograhpy-body1': {
      fontSize: 18,
      fontWeight: 400,
    },

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}));

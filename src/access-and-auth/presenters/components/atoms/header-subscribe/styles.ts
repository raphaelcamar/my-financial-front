import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    '& .MuiTypography-h1': {
      fontSize: 36,
      fontWeight: 600,
    },

    '& .MuiTypography-body1': {
      fontSize: 18,
      color: theme.palette.grey[400],
    },
  },
}));

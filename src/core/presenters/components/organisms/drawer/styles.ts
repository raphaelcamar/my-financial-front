import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '& .MuiDrawer-paper': {
      borderRadius: 16,
      height: 'auto !important',
      padding: '28px 36px',
      marginTop: 48,
      minWidth: 504,
    },
  },

  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 48,
  },

  spacing: {
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiTypography-body1': {
      fontWeight: 500,
      fontSize: 18,
    },
  },

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 16,
  },
}));

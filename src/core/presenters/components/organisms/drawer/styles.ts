import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '& .MuiDrawer-paper': {
      borderRadius: 16,
      padding: '28px 36px',
      marginTop: 48,
      minWidth: 504,
      height: '90%',
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
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 286,
    padding: 24,
    position: 'fixed',
    height: '100vh',
    borderRight: `1px solid ${theme.palette.primary[100]}`,
  },

  header: {
    marginBottom: 48,
  },
}));

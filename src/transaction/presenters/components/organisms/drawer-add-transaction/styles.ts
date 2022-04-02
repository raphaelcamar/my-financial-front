import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    marginBottom: 28,
  },

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 16,
  },

  submitButton: {
    width: '100%',
  },

  progress: {
    marginRight: 4,
  },
}));

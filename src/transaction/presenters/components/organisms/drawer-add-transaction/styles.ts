import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
}));

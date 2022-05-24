import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.primary.main,
    marginLeft: 8,
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 400,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    paddingBottom: 16,
    marginBottom: 28,
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary[100]}`,
  },

  logo: {
    padding: '10px 18px',
    background: theme.palette.primary.main,
    borderRadius: 12,
  },
}));
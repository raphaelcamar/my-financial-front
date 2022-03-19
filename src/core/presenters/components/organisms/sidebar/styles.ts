import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 286,
    padding: 24,
    position: 'fixed',
    height: '100vh',
    borderRight: `2px solid ${theme.palette.primary[100]}`,
  },

  header: {
    marginBottom: 48,
  },

  line: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    margin: '8px 0px 8px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingLeft: 12,
  },

  wrapperIconText: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
}));

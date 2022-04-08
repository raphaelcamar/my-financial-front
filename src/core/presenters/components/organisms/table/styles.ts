import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      background: theme.palette.grey[100],
      cursor: 'pointer',
    },
  },

  tableContainer: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
    maxHeight: 500,
    overflow: 'auto',
  },

  tableHead: {
    padding: 16,
    border: '1px solid rgba(224, 224, 224, 1)',
    borderRadius: 16,
    overflow: 'auto',
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },

  wrapperIcons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
}));

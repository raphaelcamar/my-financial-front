import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 48,
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 15,
    width: '100%',
    background: theme.palette.background.paper,
    margin: '8px 0',

    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },

  error: {
    borderColor: theme.palette.error.main,
  },

  icon: {
    transform: 'rotate(0deg)',
    transition: 'all ease .1s',
  },

  wrapperContainer: {
    position: 'relative',
  },

  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },

  open: {
    borderRadius: '15px 15px 0 0',
    borderBottom: 'none',
    borderColor: theme.palette.primary.main,
  },

  openShevron: {
    transition: 'all ease .1s',
    transform: 'rotate(-180deg)',
  },

  invisible: {
    height: 15,
  },

  selected: {
    background: theme.palette.grey[200],
  },

  optionsContainer: {
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '0 0 15px 15px',
    borderTop: 'none',
    boxShadow: theme.shadows[1],
    position: 'absolute',
    top: 78,
    transform: 'scale(0)',
    transformOrigin: 'top',
    transition: 'transform 0.1s ease 0s',
    width: '100%',
  },

  messageValidator: {
    color: theme.palette.error.main,
    fontSize: 14,
  },

  openOptions: {
    zIndex: 1000,
    transform: 'scale(1)',
    transformOrigin: 'top',
  },

  option: {
    padding: '8px',
    margin: 8,
    borderRadius: 8,

    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.grey[200],
    },
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: 8,
      color: theme.palette.grey[100],
      fontSize: 14,
      padding: '8px',
      border: 'none',
      transition: 'all ease .08s',
      cursor: 'pointer',

      '&:focus': {
        transform: 'scale(0.9)',
      },

      '&:disabled': {
        background: theme.palette.grey[300],
        color: theme.palette.grey[700],
      },
    },

    error: {
      background: theme.palette.error.main,
      color: theme.palette.grey[100],
    },

    outlined: {
      background: theme.palette.background.paper,
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
    },

    outlinedError: {
      background: theme.palette.background.paper,
      color: theme.palette.error.main,
      border: `2px solid ${theme.palette.error.main}`,
    },

    fullfiled: {
      background: theme.palette.primary.main,
    },

    large: {
      padding: '16px 24px',
      fontSize: 16,
    },

    icon: {
      marginLeft: 12,
    },

    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },

    normal: {},
  })
);

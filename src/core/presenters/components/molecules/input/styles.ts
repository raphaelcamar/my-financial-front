import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStylesProvider = (colorFocus: string) => {
  const useStyles = makeStyles((theme: Theme) => ({
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },

    input: {
      border: 'none',
      outline: 'none',
      width: '100%',
      height: '100%',
      background: 'none !important',
      fontSize: 16,
      padding: '8px 12px',
      '&::placeholder': {
        color: theme.palette.grey[500],
        fontSize: 16,
      },
    },

    containerInput: {
      border: `1px solid ${colorFocus}`,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 18px',
      // gap: 40,
      height: 46,
      borderRadius: 12,
      transition: `.${theme.transitions.duration.enteringScreen} ${theme.transitions.easing.sharp}`,
    },

    messageValidator: {
      color: theme.palette.error.main,
      fontSize: '14px !important',
    },

    invisible: {
      height: 15,
    },
  }));

  return useStyles();
};

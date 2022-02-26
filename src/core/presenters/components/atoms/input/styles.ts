import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStylesProvider = (colorFocus: string) => {
  const useStyles = makeStyles((theme: Theme) => ({
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
      fontSize: 16,
      '&::placeholder': {
        color: theme.palette.grey[500],
        fontSize: 16,
      },
    },

    containerInput: {
      border: `2px solid ${colorFocus}`,
      display: 'flex',
      flexDirection: 'row',
      gap: 40,
      padding: '18px 12px',
      borderRadius: 15,
      transition: `${theme.transitions.duration.enteringScreen} ${theme.transitions.easing.sharp}`,
    },

    messageValidator: {
      color: theme.palette.error.main,
      fontSize: 12,
    },
  }));

  return useStyles();
};

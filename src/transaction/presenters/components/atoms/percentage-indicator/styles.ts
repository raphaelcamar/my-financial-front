import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = (type: string /* Switch for typeTransaction when done */) => {
  const styles = makeStyles((theme: Theme) => ({
    button: {
      background: type === 'ENTRANCE' ? theme.palette.success[100] : theme.palette.error[100],
      borderRadius: 24,
      border: 'none',
      padding: 9,
      aspectRatio: 'auto 4 / 3',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 4,
      alignItems: 'center',
    },

    container: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',

      '& .MuiTypography-body1': {
        color: type === 'ENTRANCE' ? theme.palette.success[500] : theme.palette.error[500],
      },

      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },

    iconWithText: {
      padding: '6px 15px',
      aspectRatio: 'auto !important',
    },

    defaultText: {
      color: theme.palette.grey[400],
    },
  }));

  return styles();
};

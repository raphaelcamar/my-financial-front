import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { TypeTransaction } from '@/transaction/domain';

export const useStyles = (type: TypeTransaction) => {
  const styles = makeStyles((theme: Theme) => ({
    button: {
      background: type === 'ENTRANCE' ? theme.palette.success[100] : theme.palette.error[100],
      borderRadius: 24,
      border: 'none',
      width: 30,
      height: 30,
      padding: 9,
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
        color: `${type === 'ENTRANCE' ? theme.palette.success[500] : theme.palette.error[500]} !important`,
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

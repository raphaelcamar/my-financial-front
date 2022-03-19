import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: '8px !important',
    background: theme.palette.background.paper,

    '& .Mui-expanded': {
      borderRadius: '8px 8px 0 0',
      background: theme.palette.primary.main,
      minHeight: 'auto !important',

      '& .MuiTypography-body1': {
        color: theme.palette.grey[50],
      },
    },
  },
}));

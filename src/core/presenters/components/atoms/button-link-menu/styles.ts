import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      // background: theme.palette.background.paper,
      borderRadius: 8,
      padding: '0px 16px',
      textDecoration: 'none',
      color: theme.typography.body1.color,
      minHeight: 48,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        background: theme.palette.primary[50],
      },
    },

    selected: {
      background: theme.palette.primary.main,
      '& .MuiTypography-body1': {
        color: theme.palette.grey[100],
      },
      '&:hover': {
        background: theme.palette.primary.main,
      },
    },
  }),
  { name: 'ButtonLinkMenuComponent' }
);

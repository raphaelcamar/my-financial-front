import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 22,
    paddingLeft: 32,
    position: 'relative',

    [theme.breakpoints.down('lg')]: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      paddingLeft: 0,
      paddingBottom: 12,
      paddingTop: 12,
    },

    '& .MuiTypography-h4': {
      fontWeight: 700,
      color: theme.palette.grey[500],
    },

    '& .MuiTypography-body1': {
      color: theme.palette.grey[800],
      fontWeight: 600,
    },
  },

  lastChild: {
    marginLeft: 0,
    [theme.breakpoints.down('lg')]: {
      borderBottom: 'none',
    },
  },

  line: {
    content: '""',
    position: 'absolute',
    height: '50%',
    left: 0,
    top: '25%',
    bottom: 0,
    background: '',
    borderLeft: `1px solid ${theme.palette.grey[300]}`,

    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },

  withoutBorder: {
    paddingLeft: 0,
  },

  indicatorTexts: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
}));

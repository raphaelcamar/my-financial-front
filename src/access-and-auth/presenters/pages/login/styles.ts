import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  login: {
    width: '45%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: 36,
    },
  },
  illustration: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '55%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  spacing: {
    padding: 25,
  },
  formContainer: {
    width: '80%',
    margin: '0 auto',
    '& .MuiTypography-h2': {
      paddingBottom: 36,
    },
  },
  buttonLoginGoogle: {
    marginTop: '24px !important',
    width: '100%',
  },
  buttonLogin: {
    borderRadius: 15,
    fontSize: 16,
    padding: 14,
    textTransform: 'inherit',
    width: '100%',
  },
  emailLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
    gap: 20,
    '& .MuiTypography-body1': {
      color: theme.palette.primary.light,
    },
  },
  line: {
    border: `0.1px solid  ${theme.palette.grey[100]}`,
    background: 'blue',
    flexGrow: 1,
  },
  containerError: {
    background: theme.palette.error.light,
    border: `1px solid ${theme.palette.error.main}`,
    borderRadius: 8,
    color: 'white',
    padding: 8,
  },
  circularProgress: {
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    justifyContent: 'center',
  },
  messageValidator: {
    color: theme.palette.error.main,
    fontWeight: 600,
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    background: theme.palette.background.default,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  login: {
    width: '45%',
  },
  illustration: {
    width: '55%',
    height: '100vh',
    background: theme.palette.primary.main,
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
    padding: 14,
    width: '100%',
    textTransform: 'inherit',
    fontSize: 16,
    borderRadius: 15,
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
    border: `1px solid ${theme.palette.error.main}`,
    background: theme.palette.error.light,
    color: 'white',
    padding: 8,
    borderRadius: 8,
  },
  circularProgress: {
    color: 'white',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 30,
  },
}));

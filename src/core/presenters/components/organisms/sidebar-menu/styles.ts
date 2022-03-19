import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 160,
  },

  defaultExpanded: {
    transition: 'transform  ease 1s',
    transform: 'scaleY(0)',
  },

  line: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    margin: '8px 0px 8px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingLeft: 12,
  },

  body: {
    '& *': {
      transition: ' ease .5s',
    },
  },
}));

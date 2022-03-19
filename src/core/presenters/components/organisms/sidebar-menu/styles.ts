import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {},

  line: {
    borderLeft: `3px solid ${theme.palette.grey[500]}`,
    marginLeft: 16,
    marginTop: 16,
  },
}));

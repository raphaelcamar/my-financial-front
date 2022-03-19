import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  line: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    margin: '8px 0px 8px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingLeft: 12,
  },

  wrapperIconText: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
}));

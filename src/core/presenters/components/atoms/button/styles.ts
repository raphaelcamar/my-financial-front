import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 14,
      width: '100%',
      textTransform: 'inherit',
      fontSize: 16,
      borderRadius: 16,
      marginTop: 36,
    },
  })
);

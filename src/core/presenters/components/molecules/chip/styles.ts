import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ColorProps } from '.';

export const useStyles = (color: ColorProps, width?: number) => {
  const styles = makeStyles((theme: Theme) => ({
    container: {
      width: width || 77,
      background: theme.palette[color][100],
      borderRadius: 4,
      '& .MuiTypography-body1': {
        color: theme.palette[color][500],
        textAlign: 'center',
      },
    },
  }));

  return styles();
};

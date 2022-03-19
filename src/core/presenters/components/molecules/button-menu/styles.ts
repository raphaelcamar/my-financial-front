import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = (toggle: boolean) => {
  const styles = makeStyles((theme: Theme) => ({
    container: {
      margin: '0px !important',
      borderRadius: '8px !important',
      padding: 16,

      '&:hover': {
        background: `${theme.palette.primary[50]} !important`,
      },
    },

    selected: {
      background: `${theme.palette.primary.main} !important`,
      '&:hover': {
        background: `${theme.palette.primary.main} !important`,
      },
    },

    icon: {
      transition: '0.3s',
      transform: `rotate(${toggle ? '0deg' : '180deg'})`,
    },

    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },

    titleIcon: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      background: 'transparent',
      '& .MuiTypography-body1': {
        color: toggle && theme.palette.grey[50],
      },
    },
  }));

  return styles();
};

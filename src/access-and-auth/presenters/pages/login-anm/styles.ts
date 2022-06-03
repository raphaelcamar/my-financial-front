import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    // overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  form: {
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  transform: {
    // overflowY: 'hidden',
    transition: 'all ease .5s',
    transform: 'translateX(-42%)',
  },

  transformOff: {
    overflowX: 'hidden',
    transition: 'all ease .5s',
    transform: 'translateX(0)',
  },

  // figure: {
  //   position: 'fixed',
  //   left: '40%',
  //   height: '100vh',
  //   width: '60%',
  //   [theme.breakpoints.down('md')]: {
  //     display: 'none',
  //   },
  // },

  anotherRoot: {
    // overflowX: 'hidden',
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: '40% 60% 40%',
  },

  wrapperFigure: {
    width: '100%',
    position: 'fixed',
    height: '100%',
    left: '40%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  figure: {
    width: 480,
    height: 480,
    borderRadius: '50%',
    background: theme.palette.primary.main,
    transition: 'all ease .5s',
    position: 'absolute',
    top: 'calc(50% - 442px / 2)',
    left: 'calc(50% - 442px / 2)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  blurred: {
    position: 'absolute',
    bottom: 0,
    height: '40vh',
    width: '100%',
    background: 'rgba(242, 244, 247, 0.32)',
    backdropFilter: 'blur(35px)',
  },

  square: {
    transform: 'rotate(90deg)',
    borderRadius: '0',
  },
}));

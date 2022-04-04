import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  basicBackground: {
    minHeight: '100vh',
    overflow: 'hidden',
    position: 'relative',
  },
  backToTop: {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    cursor: 'pointer',
    '&.MuiIconButton-colorPrimary:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover': {
      boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 8px 0px',
    },
    '&.MuiIconButton-root': {
      padding: '0px',
      borderTopLeftRadius: '30%',
      borderRadius: '0%',
    },
  },
  scrollImg: {
    width: 80,
    [theme.breakpoints.down(600)]: {
      width: 65,
    },
  },
}))

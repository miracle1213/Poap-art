import { Theme, makeStyles } from '@material-ui/core/styles'
import DesktopImage from '../../assets/images/land_desktop.svg'
import MobileImage from '../../assets/images/land_mobile.svg'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 4,
    display: 'block',
    marginTop: '-88px',
    '@media (max-width:768px)': {
      marginTop: 0,
    },
  },
  topContainer: {
    padding: '48px 16px 32px',
    marginTop: 76,
    minHeight: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `transparent url(${MobileImage}) no-repeat top`,
    backgroundSize: 'contain',
    marginBottom: '48px',
    '@media (min-width:768px)': {
      marginTop: 0,
      padding: '32px 32px 64px',
      backgroundPosition: '100% 0',
      background: `transparent url(${DesktopImage}) no-repeat 100%`,
    },
  },
  title: {
    color: '#48558b',
    fontSize: 28,
    lingHeight: '46px',
    fontWeight: 400,
    marginBottom: 24,
    '@media (min-width:768px)': {
      fontSize: 46,
      textAlign: 'left',
    },
  },
  subTitle: {
    color: '#8492ce',
    fontSize: 16,
    lingHeight: '24px',
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    '@media (min-width:768px)': {
      padding: 0,
      textAlign: 'left',
    },
  },
  discordLink: {
    color: '#3fbaef',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'revert',
    },
  },
  linkDiv: {
    marginTop: '-160px',
    padding: '0px 16px 8px',
    '@media (min-width:768px)': {
      padding: '0px 32px 8px',
    },
  },
  tabDviv: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (min-width:768px)': {
      justifyContent: 'flex-start',
    },
  },
  tabBtn: {
    padding: '10px 16px 8px',
    borderRadius: 25,
    fontSize: 16,
    color: '#48558b',
    cursor: 'pointer',
    marginRight: 32,
  },
  activeTab: {
    background: '#f4f4f9',
    padding: '10px 16px 8px',
    borderRadius: 25,
    fontSize: 16,
    color: '#48558b',
    cursor: 'pointer',
    marginRight: 32,
  },
  count: {
    color: '#8492ce',
    marginLeft: 7,
  },
  cardGroupDiv: {
    padding: 16,
    position: 'relative',
    '@media (min-width:1024px)': {
      padding: 32,
    },
    '@media (min-width:768px)': {
      padding: 24,
    },
  },
  cardContainer: {
    // justifyContent: 'space-between',
    // [theme.breakpoints.up(1024)]: {
    //   gridTemplateColumns: 'repeat(3,1fr)',
    //   gridGap: '32px',
    //   display: 'grid',
    // },
    // [theme.breakpoints.down(1024)]: {
    //   gridTemplateColumns: 'repeat(2,1fr)',
    //   gridGap: '24px',
    //   display: 'grid',
    // },
    // [theme.breakpoints.down(768)]: {
    //   display: 'grid',
    //   gap: 16,
    //   animation: 'show-up .35s ease',
    // },
  },
}))

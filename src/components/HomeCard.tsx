import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SampleImg from '../assets/images/sampleImg.jpg'
import Avatar from '../assets/images/motor.jpg'
import { Typography, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 0 32px rgb(0 0 0 / 8%)',
    // maxWidth: 384,
    marginBottom: 20,
    transform: 'translateZ(0)',
    transition: 'transform .3s cubic-bezier(.2,1,.3,1)',
    backgroundImage:
      'radial-gradient(at 50% 25%,var(--card-radial-color) 40%,transparent 80%)',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  imgDiv: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  img: {
    position: 'relative',
    background: '#fff',
    width: '100%',
    height: '100%',
    boxShadow: '0 0 24px rgb(0 0 0 / 6%)',
  },
  contain: {
    padding: '24px 16px',
  },
  lgText: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: 22,
    lineHeight: '24px',
    color: '#48558b',
    width: '100%',
    maxWidth: '100%',
    fontWeight: 400,
    marginBottom: 4,
  },
  smText: {
    color: '#8492ce',
    fontSize: 12,
    marginRight: 8,
  },
  infoDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mdText: {
    color: '#48558b',
    fontSize: 14,
    paddingTop: 4,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: '1px solid #fff',
    background: '#eee',
  },
}))

function HomeCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.imgDiv}>
        <img src={Avatar} alt="sample" className={classes.img} />
      </div>
      <div className={classes.contain}>
        <div style={{ marginBottom: 16 }}>
          <Typography className={classes.lgText}>
            POPAathon's International Women's City
          </Typography>
          <Typography className={classes.smText}>256X256</Typography>
        </div>
        <div className={classes.infoDiv}>
          <Typography className={classes.mdText}>Closed 25days ago</Typography>
          <img src={Avatar} alt="avatar" className={classes.avatar} />
        </div>
      </div>
    </Card>
  )
}

export default HomeCard

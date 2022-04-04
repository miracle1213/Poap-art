import React, { useState } from 'react'
import {
  Typography,
  Grid,
  IconButton,
  Popover,
  Button,
  Backdrop,
  Modal,
  Fade,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { useStyles } from './Style'
import EventsItem from './components/EventsItem'
// icons
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined'
import OnlineIcon from '../../assets/images/online.svg'
import PaintedIcon from '../../assets/images/painted.svg'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt'
import CropIcon from '@material-ui/icons/Crop'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
// components
import Canvas from './components/Canvas'
import KeyboardModal from './components/KeyboardModal'

function Detail() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMoreClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const [keyboardModalOpen, setKeyboardModalOpen] = useState(false)
  const handleOpenKeyboardModal = () => {
    setKeyboardModalOpen(true)
  }
  const handleCloseKeyboardModal = () => {
    setKeyboardModalOpen(false)
  }

  return (
    <>
      <Canvas />
      <div className={classes.root}>
        <div className={classes.head}>
          <div>
            <Typography className={classes.h1}>
              ONE37pm's 25 Days of POAP | Paint Party
            </Typography>
            <Typography className={classes.h2}>
              512x512 Closed at Dec 26, 2021 2:00 PM
            </Typography>
          </div>
          <IconButton onClick={handleMoreClick} className={classes.moreBtn}>
            <MoreVertIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleMoreClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div className={classes.btnDiv}>
              <Button
                onClick={handleOpenKeyboardModal}
                className={classes.btn1}
              >
                <KeyboardIcon className={classes.icon4} />
                Keyboard controls
              </Button>
              <Button className={classes.btn1}>
                <SystemUpdateAltIcon className={classes.icon4} />
                Download entire canvas
              </Button>
              <Button className={classes.btn1}>
                <CropIcon className={classes.icon4} />
                Drop canvas
              </Button>
              <Button className={classes.btn1}>
                <FullscreenIcon className={classes.icon4} />
                Enter full screen
              </Button>
            </div>
          </Popover>
        </div>
        <div className={classes.content}>
          <div className={classes.wide}>
            <div style={{ marginTop: 10 }}>
              <Typography className={classes.h3}>
                ONE37pm's 25 Days of POAP | Paint Party
              </Typography>
              <Typography className={classes.h3}>
                An event to have fun with unknown friends.
              </Typography>
            </div>

            <div style={{ margin: '56px auto' }}>
              <Typography className={classes.h4}>Valid events</Typography>
              <Grid container spacing={2}>
                {['1', '2', '3', '4', '5', '6'].map((item: any, key: any) => (
                  <Grid item sm={12} lg={6} key={key}>
                    <EventsItem />
                  </Grid>
                ))}
              </Grid>
            </div>

            <div style={{ marginBottom: 56 }}>
              <Typography className={classes.h4}>Valid events</Typography>
              <div className={classes.stateDiv}>
                <div className={classes.onlineDiv}>
                  <img
                    src={OnlineIcon}
                    alt="online"
                    className={classes.icon1}
                  />
                  <div>
                    <Typography className={classes.h7}>2</Typography>
                    <Typography className={classes.h2}>Online now</Typography>
                  </div>
                </div>

                <div className={classes.onlineDiv}>
                  <img
                    src={PaintedIcon}
                    alt="paint"
                    className={classes.icon1}
                  />
                  <div>
                    <Typography className={classes.h7}>557,388</Typography>
                    <Typography className={classes.h2}>
                      Painted pixels
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Typography className={classes.h4}>Leaderboard</Typography>
              <div className={classes.leaderboard}>
                {['1', '2', '3', '4', '5'].map((item: any, key: any) => (
                  <div key={key} className={classes.leadItem}>
                    <div style={{ display: 'flex' }}>
                      <Typography className={classes.h3}>{key}</Typography>
                      <div className={classes.div1}>
                        <div className={classes.icon3} />
                        <Typography className={classes.h3}>
                          0x5aEcB09434e5A276aF7D72a0b9C5Aa39D262FB1D
                        </Typography>
                        <LaunchOutlinedIcon className={classes.icon2} />
                      </div>
                    </div>
                    <Typography className={classes.h3}>
                      19,409<span className={classes.h2}>px</span>
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className={classes.keyboardModal}
        open={keyboardModalOpen}
        onClose={handleCloseKeyboardModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={keyboardModalOpen}>
          <KeyboardModal handleCloseKeyboardModal={handleCloseKeyboardModal} />
        </Fade>
      </Modal>
    </>
  )
}

export default Detail

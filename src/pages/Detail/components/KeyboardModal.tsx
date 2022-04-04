import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Typography, IconButton } from '@material-ui/core'
import { useStyles } from '../Style'

function KeyboardModal(props: any) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.keyboardPaper}>
        <div className={classes.keyboardHeader}>
          <Typography className={classes.h7}>Keyboard controls</Typography>
          <IconButton onClick={props.handleCloseKeyboardModal}>
            <CloseIcon className={classes.icon5} />
          </IconButton>
        </div>
        <div className={classes.keyboardContent}>
          <div className={classes.keyboardControls}>
            <div className={classes.keyboardItems}>
              <div className={classes.keyboard}>
                <div className={classes.key}>esc</div>
              </div>
              <Typography className={classes.h8}>
                Cancel crop selection if cropping <br />
                Closes an open modal
              </Typography>
            </div>
            <div className={classes.keyboardItems1}>
              <div className={classes.keyboard}>
                <div className={classes.key}>Q</div>
                <div className={classes.key}>E</div>
              </div>
              <Typography className={classes.h8}>Adjust zoom level</Typography>
            </div>
            <div className={classes.keyboardItems2}>
              <div>
                <div className={classes.keyboard}>
                  <div className={classes.key1} />
                  <div className={classes.key}>W</div>
                  <div className={classes.key1} />
                </div>
                <div className={classes.keyboard}>
                  <div className={classes.key}>A</div>
                  <div className={classes.key}>S</div>
                  <div className={classes.key}>D</div>
                </div>
              </div>
              <Typography className={classes.h8}>Move canvas</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyboardModal

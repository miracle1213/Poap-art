import { Typography } from '@material-ui/core'
import Avatar from '../../../assets/images/avatar.jpg'
import TimerIcon from '@material-ui/icons/Timer'
import { useStyles } from '../Style'

function EventsItem() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.eventItem}>
        <div>
          <img src={Avatar} alt="avatar" className={classes.avatar} />
        </div>
        <div>
          <Typography className={classes.h5}>
            ONE37pm’s 25 Days of POAP Day 1 | POAP
          </Typography>
          <Typography className={classes.h6}>
            <TimerIcon className={classes.clockIcon} />
            -0s
          </Typography>
        </div>
      </div>
    </>
  )
}

export default EventsItem

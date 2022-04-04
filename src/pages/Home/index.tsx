import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Typography, Button, Grid } from '@material-ui/core'
// constant
import { Tab } from '../../config/constants'
// style
import { useStyles } from './Style'
// component
import HomeCard from '../../components/HomeCard'

function Home() {
  const classes = useStyles()
  const [tabNum, setTabNum] = useState(Tab.OPEN)

  const handleTab = (e: number) => {
    setTabNum(e)
  }

  return (
    <div className={classes.root}>
      <div className={classes.topContainer}>
        <Typography className={classes.title}>Welcome to POAP.art</Typography>
        <Typography className={classes.subTitle}>
          Enjoy your journey across the intersection of art and tech.
        </Typography>
        <Typography className={classes.subTitle}>
          Join us at{' '}
          <Link to="/" className={classes.discordLink}>
            poap.art/discord
          </Link>
        </Typography>
      </div>

      <div className={classes.linkDiv}>
        <div className={classes.tabDviv}>
          <Button
            className={clsx(classes.tabBtn, {
              [classes.activeTab]: tabNum === Tab.OPEN,
            })}
            onClick={() => handleTab(Tab.OPEN)}
          >
            Open<span className={classes.count}>12</span>
          </Button>
          <Button
            className={clsx(classes.tabBtn, {
              [classes.activeTab]: tabNum === Tab.SOON,
            })}
            onClick={() => handleTab(Tab.SOON)}
          >
            Soon<span className={classes.count}>12</span>
          </Button>
          <Button
            className={clsx(classes.tabBtn, {
              [classes.activeTab]: tabNum === Tab.CLOSED,
            })}
            onClick={() => handleTab(Tab.CLOSED)}
          >
            Closed<span className={classes.count}>12</span>
          </Button>
        </div>
      </div>

      <div className={classes.cardGroupDiv}>
        <Grid container spacing={5} className={classes.cardContainer}>
          {['1', '2', '3', '1', '2', '3', '1', '2'].map(
            (item: any, key: any) => (
              <Grid item xl={3} lg={4} md={6} sm={12} key={key}>
                <HomeCard />
              </Grid>
            ),
          )}
        </Grid>
      </div>
    </div>
  )
}

export default Home

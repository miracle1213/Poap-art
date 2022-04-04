/* eslint-disable */
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { useStyles } from './style'
// core components
import Home from '../../pages/Home'
import Header from '../Header'
import Detail from '../../pages/Detail'

const switchRoutes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </div>
)

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Header />
        <Box>{switchRoutes}</Box>
      </div>
    </Router>
  )
}

export default Dashboard

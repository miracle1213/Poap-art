import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import Logo from '../../assets/images/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '24px 16px',
    pointerEvents: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: 42,
    height: 31,
  },
  walletBtn: {
    borderRadius: 25,
    background: '#3fbaef',
    color: '#fff',
    border: 'none',
    boxShadow: '0 4px 24px rgb(63 186 239 / 30%)',
    cursor: 'pointer',
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Link to="/">
        <img src={Logo} alt="logo" className={classes.logo} />
      </Link>
      <Button className={classes.walletBtn}>Connect Wallet</Button>
    </div>
  )
}

export default Header

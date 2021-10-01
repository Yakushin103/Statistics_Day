import React from 'react'

import Grid from '@material-ui/core/Grid'

import './Header.scss'

const Header = () => {

  return (
    <Grid container>
      <Grid item>
        logo ava
      </Grid>
      <Grid item>
        login name
      </Grid>
    </Grid>
  )
}

export default Header
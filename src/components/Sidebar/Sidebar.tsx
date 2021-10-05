import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@material-ui/core/Grid'
import SettingsIcon from '@material-ui/icons/Settings'
import AddIcon from '@material-ui/icons/Add'
import BarChartIcon from '@material-ui/icons/BarChart'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { updateSidebar } from '../../store/main/reducer'

import './Sidebar.scss'

type SidebarProps = {
  isSidebarOpen: boolean
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  const dispatch = useDispatch()

  const onSidebarOpen = () => {
    dispatch(updateSidebar(!isSidebarOpen))
  }

  return (
    <Grid
      direction="column"
      justifyContent="center"
      alignItems="center"
      container
      spacing={1}>
      <Grid item>
        {
          isSidebarOpen ?
            <Button onClick={onSidebarOpen}>
              <ArrowBackIosIcon />
            </Button> :
            <Button onClick={onSidebarOpen}>
              <ArrowForwardIosIcon />
            </Button>
        }
      </Grid>

      <Grid item className="sidebar-row">
        <NavLink to="/main">
          <AddIcon />
          {
            isSidebarOpen &&
            <Typography variant="h6">
              Add data
            </Typography>
          }
        </NavLink>
      </Grid>

      <Grid item className="sidebar-row">
        <NavLink to="/statistics">
          <BarChartIcon />
          {
            isSidebarOpen &&
            <Typography variant="h6">
              Statistics
            </Typography>
          }
        </NavLink>
      </Grid>

      <Grid item className="sidebar-row">
        <NavLink to="/settings">
          <SettingsIcon />
          {
            isSidebarOpen &&
            <Typography variant="h6">
              Settings
            </Typography>
          }
        </NavLink>
      </Grid>
    </Grid>
  )
}

export default Sidebar
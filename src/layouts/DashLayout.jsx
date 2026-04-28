import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(({ open }) => ({
  width: open ? drawerWidth : 80,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: open ? drawerWidth : 80,
    transition: '0.3s',
    overflowX: 'hidden',
  },
}));

const AppBar = styled(MuiAppBar)(({ open }) => ({
  width: `calc(100% - ${open ? drawerWidth : 80}px)`,
  marginLeft: open ? drawerWidth : 80,
  transition: '0.3s',
}));

const DashLayout = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>

          <Button color="inherit" onClick={() => navigate('/')}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <Toolbar />
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard"
              selected={location.pathname === "/dashboard"}
            >
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/reports"
              selected={location.pathname === "/dashboard/reports"}
            >
              <ListItemIcon><AssessmentIcon /></ListItemIcon>
              {open && <ListItemText primary="Reports" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/users"
              selected={location.pathname === "/dashboard/users"}
            >
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              {open && <ListItemText primary="Users" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;
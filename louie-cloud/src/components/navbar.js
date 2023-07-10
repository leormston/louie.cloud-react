import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import lg_logo from '../images/lg_logo.png';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Projects', 'Bio', 'Contact', 'Blog'];
export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
        <AppBar position="fixed" sx={{bgcolor: "#383040"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <img src={lg_logo} height="50px" width="50px"  alt="logo" style={{"marginRight": "20px"}}/>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              height: "50px",
              alignItems: "center"
            }}
          >
            louie.cloud
          </Typography>
          </Box>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={() => window.location.replace(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              height: "50px",
              verticalAlign: "middle",
              alignItems: "center",
            }}>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
            <img src={lg_logo} height="50px" width="50px"  alt="logo" style={{"marginRight": "10px"}}/>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                verticalAlign: "middle",
            }}
          >
            louie.cloud
          </Typography>
          </Box>
          
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, textAlign: "right", height: "50px", alignItems: "center"}}>
            {pages.map((page) => (
                <Typography
                variant="h6"
                noWrap
                component="a"
                href= {page}
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >
                {page}
                </Typography>
            ))}
          </Box>

    
        </Toolbar>
      </Container>
    </AppBar>
    );
}
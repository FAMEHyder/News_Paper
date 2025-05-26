import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Link,
  Popover,
  Typography,
  List,
  ListItemButton,
  TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DMT from '../Image/DMT.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { YouTube } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();

  // For Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [dates, setDates] = useState([]);
  const [filteredDates, setFilteredDates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const today = new Date();
    const dateArray = [];
    for (let i = 0; i < 60; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dateArray.push(date.toISOString().split('T')[0]);
    }
    setDates(dateArray);
    setFilteredDates(dateArray);
  }, []);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setSearch('');
    setFilteredDates(dates);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    setFilteredDates(dates.filter((d) => d.includes(val)));
  };

  const handleDateClick = (date) => {
    navigate('/store', { state: { selectedDate: date } });
    handleDropdownClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'past-issues-popover' : undefined;

  return (
    <AppBar sx={{ backgroundColor: 'white', height: '30vh' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '30vh', width: '100%' }}>
        <Box
          onClick={() => navigate('/')}
          component={'img'}
          src={DMT}
          sx={{
            cursor: 'pointer',
            height: '23vh',
            width: '100%',
            borderBottom: '4px solid black',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />

        <Box sx={{ height: '10vh', width: '100%', bgcolor: 'black', display: 'flex' }}>
          <Box flexGrow={1}>
            <Button color="inherit" sx={{ mr: 3, color: 'white', '&:hover': { bgcolor: 'red' } }}>
              صفحہ اول
            </Button>
            <Button
              onClick={handleDropdownOpen}
              color="inherit"
              sx={{ mr: 3, borderInlineStart: '2px solid silver', color: 'white', '&:hover': { bgcolor: 'red' } }}
            >
              گزشتہ شمارے
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleDropdownClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  width: 300,
                  maxHeight: 400,
                  p: 2,
                  overflowY: 'auto',
                  mt: 1,
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                📅 آج کی تاریخ: {new Date().toISOString().split('T')[0]}
              </Typography>
              <TextField
                fullWidth
                placeholder="تاریخ تلاش کریں..."
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
                sx={{ mb: 2 }}
              />
              <List>
                {filteredDates.map((date, index) => (
                  <ListItemButton key={index} onClick={() => handleDateClick(date)}>
                    {date}
                  </ListItemButton>
                ))}
              </List>
            </Popover>
          </Box>

          {/* Socials */}
          <Box>
            <Link href="https://www.youtube.com" target="_blank" color="inherit">
              <YouTube sx={{ fontSize: 30, '&:hover': { color: 'red' } }} />
            </Link>
            <Link href="https://www.whatsapp.com" target="_blank" color="inherit">
              <WhatsAppIcon sx={{ fontSize: 30, '&:hover': { color: 'green' } }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" color="inherit">
              <TwitterIcon sx={{ fontSize: 30, '&:hover': { color: '#1da1f2' } }} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" color="inherit">
              <InstagramIcon sx={{ fontSize: 30, '&:hover': { color: '#e1306c' } }} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" color="inherit">
              <FacebookIcon sx={{ fontSize: 30, '&:hover': { color: 'blue' } }} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

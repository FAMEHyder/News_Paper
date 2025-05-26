import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Link,
  TextField,
  List,
  ListItemButton,
  Popover,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DMT from '../Image/DMT.png';
import { Facebook, Instagram, Twitter, WhatsApp, YouTube } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [dates, setDates] = useState([]);
  const [filteredDates, setFilteredDates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const today = new Date();
    const dateArray = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dateArray.push(date.toISOString().split('T')[0]);
    }
    setDates(dateArray);
    setFilteredDates(dateArray);
  }, []);

  const handleClick = (path) => {
    navigate(path);
  };

  // The fix: use event.currentTarget here
  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setSearch('');
    setFilteredDates(dates);
  };

  const handleDateClick = (date) => {
    navigate('/store', { state: { selectedDate: date } });
    handleDropdownClose();
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    setFilteredDates(dates.filter((d) => d.includes(val)));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'past-issues-popover' : undefined;

  return (
    <AppBar sx={{ backgroundColor: 'white', height: '30vh' }}>
      <Toolbar sx={{ flexDirection: 'column', height: '30vh', width: '100%' }}>
        <Box
          onClick={() => handleClick('/')}
          component="img"
          src={DMT}
          sx={{
            cursor: 'pointer',
            height: '23vh',
            width: '100%',
            borderBottom: '4px solid black',
          }}
        />
        <Box sx={{ height: '10vh', width: '100%', bgcolor: 'black', display: 'flex' }}>
          <Box flexGrow={1}>
            <Button sx={{ color: 'white', mr: 3, '&:hover': { bgcolor: 'red' } }}>صفحہ اول</Button>
            <Button sx={{ color: 'white', mr: 3, borderInlineStart: '2px solid silver', '&:hover': { bgcolor: 'red' } }}>
              صفحات
            </Button>
            <Button
              sx={{ color: 'white', mr: 3, borderInlineStart: '2px solid silver', '&:hover': { bgcolor: 'red' } }}
              onClick={handleDropdownOpen}
            >
              گزشتہ شمارے
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleDropdownClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              PaperProps={{ sx: { width: '300px', maxHeight: '400px', p: 2, overflowY: 'auto' } }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                📅 آج کی تاریخ: {new Date().toISOString().split('T')[0]}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="تاریخ تلاش کریں..."
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
          <Box>
            <Link href="https://www.youtube.com" target="_blank" color="inherit">
              <YouTube sx={{ fontSize: 30, '&:hover': { color: 'red' } }} />
            </Link>
            <Link href="https://www.whatsapp.com" target="_blank" color="inherit">
              <WhatsApp sx={{ fontSize: 30, '&:hover': { color: 'green' } }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" color="inherit">
              <Twitter sx={{ fontSize: 30, '&:hover': { color: '#1da1f2' } }} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" color="inherit">
              <Instagram sx={{ fontSize: 30, '&:hover': { color: '#e1306c' } }} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" color="inherit">
              <Facebook sx={{ fontSize: 30, '&:hover': { color: 'blue' } }} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

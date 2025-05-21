import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { useState } from 'react';
import paper from '../Image/paper.png';
import {useNavigate} from 'react-router-dom';

/** ─────────────────────────────────────────────
 *  Re-usable card that pops a dialog on click
 *  ────────────────────────────────────────────*/
function CityCard({ title }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleclick=(path)=>{
    navigate(path)
  }


  return (
    <>
      <Card
        sx={{
          mt: 20,
          width: '60vh',
          cursor: 'pointer',
          ':hover': {
            boxShadow: 1,
            transition: 'all .3s ease',
            transform: 'scale(.99)',
          },
        }}
        onClick={() => setOpen(true)}
      >
        <CardContent sx={{ textAlign: 'end' }}>{title}</CardContent>
        <CardMedia
          component="img"
          src={paper}
          sx={{ height: '50vh', backgroundSize: 'contain' }}
        />
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent dividers>
          {/* Put whatever you want in here */}
          <p>What Would you like to do with <strong>{title}</strong>.</p>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            onClick={() => handleclick('/add')}
          >
            Add Today NewsPaper
          </Button>
          <Button onClick={() => handleclick('/view')} variant='contained' color='secondary'>View Today NewsPaper</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

/** ─────────────────────────────────────────────
 *  Main page
 *  ────────────────────────────────────────────*/
export default function Home() {
  return (
    <Container sx={{ height: '170vh' }}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center">
          <CityCard title="گلگت بلتستان" />
        </Box>
      </Box>
    </Container>
  );
}

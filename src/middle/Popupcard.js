import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Middle from './Middle';
import Cardpopup from '../grid/popup/Cardpopup';
import './Middle.css'


export default function Popupcard({data, change}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
       <Middle data={data} change={change} />
      </Button>
      <Dialog
        maxWidth={600}
        open={open}
        onClose={handleClose}
      >
       <Cardpopup />
      </Dialog>
    </div>
  );
}

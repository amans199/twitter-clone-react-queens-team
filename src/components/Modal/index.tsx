import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Signin from '../../pages/signIn';
import AppIcon from '../AppIcons';

const forBox = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {sx:400 ,md:700},
  bgcolor: '#15202B',
  border: '2px solid #000',
  boxShadow: 24,
  px: {sx:10 ,md:20},
  py:{sx:5 ,md:10},
  my:3,
  borderRadius: 7

};
const foButton={
  position:'absolute',
  top:15,
  left:10,

}
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>LogIn</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={forBox}>
          <Button onClick={handleClose} sx={foButton}>
            <AppIcon name='xmark' color='#fff' size={20}></AppIcon>
            </Button>
  <Signin></Signin>
       
        </Box>
      </Modal>
    </div>
  );
}

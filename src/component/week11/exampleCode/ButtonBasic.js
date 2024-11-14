import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


export default function BasicButtons() {
  return (
    <div direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Button variant="contained" startIcon={<SendIcon />}>Text</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}> Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
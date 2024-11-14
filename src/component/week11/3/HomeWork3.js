import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';



export default function BasicButtons() {
    return (
        <div direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button variant="outlined" startIcon={<HomeIcon />} sx={{ mr:1 }}> delete </Button>
            <Button variant="contained" startIcon={<SearchIcon />} sx={{ mr:1 }}> send </Button>
        </div>
    );
}
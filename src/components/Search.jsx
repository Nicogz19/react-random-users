import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = ({search, handleChangeSearch}) => {
    return (
        <Box>
            <TextField label="Buscar por nombre" inputProps={{ "data-testid": "content-input" }} fullWidth variant="outlined" value={search} onChange={(e) => handleChangeSearch(e)} />
        </Box>
    )
}

export default Search
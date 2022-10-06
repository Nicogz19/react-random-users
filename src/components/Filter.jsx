import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Filter({countryValue, handleChangeFilter, users}) {

    let arrayCountries = [];

    users.map(user => {
        // quito los paises repetidos del array
        if(!arrayCountries.includes(user.location.country)){
            arrayCountries.push(user.location.country)
        }
    })

    const countrys = arrayCountries;

    return (
        <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-multiple-checkbox-label">Filtrar por país</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryValue}
                multiple
                placeholder='Filtrar por país'
                onChange={(event) => {
                    handleChangeFilter(event.target.value);
                }}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Filtrar por país" />}
                MenuProps={MenuProps}
            >
                {
                    countrys.map(country => (
                        <MenuItem key={country} value={country}>
                            <Checkbox checked={countryValue.indexOf(country) > -1} />
                            <ListItemText primary={country} />
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}
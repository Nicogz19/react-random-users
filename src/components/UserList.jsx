import { Box, Grid } from '@mui/material'
import React, { useEffect, useContext, useState } from 'react'
import UserContext from './context/User/UserContext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Profile from './Profile';
import Search from './Search';
import Filter from './Filter';
import Skeleton from './Skeleton';


const UserList = () => {

    const { getUsers, users, loading } = useContext(UserContext)

    useEffect(() => {
        getUsers();
    }, [])

    const [openProfile, setOpenProfile] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [search, setSearch] = useState('');
    const [countryValue, setFilterCountry] = useState([]);

    const handleChangeFilter = (value) => {
        setFilterCountry(value)
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleOpenProfile = (user) => {
        setOpenProfile(true);
        setSelectedUser(user);
    };

    const handleCloseProfile = () => {
        setOpenProfile(false);
    };

    if(loading){
        return <Skeleton />
    }

    
    let results = users;
    if(search || countryValue){
        results = users.filter(user => user.location.country.includes(countryValue ? countryValue : '') && user.name.first.toLowerCase().includes(search.toLowerCase()))
    }
    
    return (
        <Box sx={{margin: '20px 15px 20px 15px'}}>

            <Grid container alignItems='center' alignContent='center' justifyContent='space-between' sx={{mb: 3}}>
                <Grid item md={8} sm={8} xs={8}>
                    <Search search={search} handleChangeSearch={handleChangeSearch} />
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <Filter
                        countryValue={countryValue}
                        handleChangeFilter={handleChangeFilter}
                        users={users}
                    />
                </Grid>
            </Grid>

            <Grid container alignItems='center' spacing={2}>
                {
                    results.map((user, index) => (
                        <Grid item md={3} sm={4} xs={6} key={user.id.value + user.email}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    image={user.picture.large}
                                    alt={user.name.first}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {user.name.first} {user.name.last}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: {user.email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Calular: {user.cell}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => handleOpenProfile(user)} variant='contained'>Ver Más</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            {openProfile && 
                <Profile
                    open={openProfile}
                    handleClose={handleCloseProfile}
                    selectedUser={selectedUser}
                />
            }
        </Box>
    )
}

export default UserList
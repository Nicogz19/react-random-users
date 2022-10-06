import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Profile = ({selectedUser, open, handleClose}) => {

    let genero = ''
    selectedUser.gender === 'male' ? genero = 'Masculino' : genero = 'Femenino'

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                <Grid container direction='column' alignItems='center'>
                    <Grid item xs={6}>
                        <img src={selectedUser.picture.large} alt={selectedUser.name.first} style={{borderRadius: '50%', width: 100}}/>
                    </Grid>
                    <Grid item xs={6}>
                        {selectedUser.name.first}
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Box>
                    <Typography>Edad: {selectedUser.dob.age} años</Typography>
                    <Typography>Genero: {genero}</Typography>
                    <Typography>Pais: {selectedUser.location.country}</Typography>
                    <Typography>Ciudad: {selectedUser.location.city}</Typography>
                    <Typography>Direccion: {selectedUser.location.street.name} {selectedUser.location.street.number}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Profile
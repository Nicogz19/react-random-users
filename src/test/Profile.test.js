import { fireEvent, render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

// simulo datos de usuario
const selectedUser = {
    gender: 'male',
    picture: {
        large: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    name: {
        first: 'Nicolas',
        last: 'Gonzalez'
    },
    dob: {
        age: 24
    },
    location: {
        country: 'Argentina', 
        city: 'Villa Carlos Paz', 
        street: {
            name: 'roma', 
            number: '33'
        } 
    }
}

test('ternary de genero: le paso el gender male para comprobar que lo muestre como Masculino', () => {
    render(<Profile selectedUser={selectedUser} open={true} handleClose={() => {}} />);

    const parrafo = screen.getByText('Genero: Masculino');
    expect(parrafo).toBeInTheDocument();
});


test('click en boton cerrar modal', () => {
    const mockHandler = jest.fn()

    render(<Profile selectedUser={selectedUser} open={true} handleClose={mockHandler} />)

    const button = screen.getByText('Cerrar');
    fireEvent.click(button)

    expect(mockHandler).toHaveBeenCalledTimes(1)
});
import { render, screen } from '@testing-library/react';
import UserList from '../components/UserList';
import UserContext from '../components/context/User/UserContext'

test("Cuando los datos estan pendientes", () => {
    const users =  []

    render(
        <UserContext.Provider value={{users: users, loading: true, getUsers:() => {}}}>
            <UserList />
        </UserContext.Provider>
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
});

const users =  [{
    id: {
        value: 'aaW343223'
    },
    gender: 'male',
    picture: {
        large: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    name: {
        first: 'Nicolas',
        last: 'Gonzalez'
    },
    email: 'nico@gmail.com',
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
}]

test("Cuando llegan los datos y se hace el render de los usuarios", () => {

    render(
        <UserContext.Provider value={{users: users, loading: false, getUsers:() => {}}}>
            <UserList />
        </UserContext.Provider>
    );

    const email = screen.getByText('Email: nico@gmail.com');
    expect(email).toBeInTheDocument();
});
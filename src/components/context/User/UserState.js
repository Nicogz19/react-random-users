import { useReducer } from 'react'
import Reducer from './UseReducer'
import UserContext from './UserContext'
import axios from 'axios'
import { GET_USERS, GET_USERS_SUCCESSFULLY } from '../types';

const UserState = (props) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const getUsers = async () => {
        dispatch({type: GET_USERS})
        await axios.get('https://randomuser.me/api/?results=20')
        .then(response => {if(response.status === 200){
            dispatch({type: GET_USERS_SUCCESSFULLY, payload: response.data.results})
        }})
        .catch(error => console.log(error))
    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            loading: state.loading,
            getUsers,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
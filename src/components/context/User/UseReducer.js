import { GET_USERS, GET_USERS_SUCCESSFULLY } from '../types';

export default function UseReducer (state, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, loading: true }
        case GET_USERS_SUCCESSFULLY:
            return { ...state, users: action.payload, loading: false }
        default:
            return state;
    }
}
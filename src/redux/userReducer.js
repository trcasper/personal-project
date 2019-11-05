import axios from 'axios';

const initialState = {
    user: {},
    loggedIn: false
};

const UPDATE_USER = "UPDATE_USER"; //action type

export function updateUser(username, password) {
    console.log("redux", username, password)
    let data = axios.post('/auth/login', {
        username: username,
        password: password
    }).then(res => {
        return res.data
    })
    return {
        type: UPDATE_USER,
        payload: data
    };
}

export default function userReducer(state = initialState, action ) {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_USER + "_FULFILLED":
            return {user: payload, loggedIn:true}
        default:
            return state;
    }
}


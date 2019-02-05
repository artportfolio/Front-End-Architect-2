import axios from 'axios';

export const login = user => ({
    type: 'LOGIN',
    payload: user
})

export const logout = () => {
    console.log('logout');
    return {
        type: 'LOGOUT'
    }
}

export const signUp = user => ({
    type: 'SIGN_UP',
    payload: user
})

export const toggleProp = () => {
    return {
        type: 'TOGGLE_PROP'
    }
}
import axios from 'axios';

export const login = () => ({
    type: 'LOGIN'
})

export const toggleProp = () => {
    return {
        type: 'TOGGLE_PROP'
    }
}
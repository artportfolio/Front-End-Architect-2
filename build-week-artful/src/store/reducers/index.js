const initialState = {
    currentUser: '',
    isLoggedIn: false,
    toggled: false,
    photos: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload.username,
                toggled: !state.toggled
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                toggled: !state.toggled
            }
        case 'SIGN_UP':
            return {
                ...state,
                toggled: !state.toggled
            }
        case 'TOGGLE_PROP':
            return {
                ...state,
                toggled: !state.toggled
            }
        default:
            return state;
    }
}

export default reducer;
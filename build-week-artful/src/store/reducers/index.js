const initialState = {
    isLoggedIn: false,
    toggled: false,
    users: [],
    photos: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
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
                isLoggedIn: true,
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
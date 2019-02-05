const initialState = {
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
                displayLogin: false
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
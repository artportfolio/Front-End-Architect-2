const initialState = {
    currentUser: '',
    isLoggedIn: false,
    toggled: false,
    photos: [],
    users: []
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
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                users: action.payload,
                toggled: !state.toggled
            }
        case 'FETCH_PHOTOS_SUCCESS':
            return {
                ...state,
                photos: action.payload
            }
        case 'ADD_PHOTOS_SUCCESS':
            return {
                ...state,
                photos: action.payload
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload
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
const initialState = {
    currentUser: '',
    isLoggedIn: false,
    toggled: false,
    photos: [],
    users: [],
    error: null,
    fetching: false,
    imageUrl: '',
    description: '',
    postName: '',
    likedPosts: [1]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
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
        case 'SIGN_UP_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'FETCH_PHOTOS_START':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_PHOTOS_SUCCESS':
            return {
                ...state,
                fetching: false,
                photos: action.payload
            }
        case 'ADD_PHOTOS_SUCCESS':
            return {
                ...state,
                photos: action.payload,
                toggled: !state.toggled
            }
        case 'DELETE_PHOTOS_SUCCESS':
            return {
                ...state,
                photos: action.payload,
                toggled: !state.toggled
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload,
                fetching: false,
            }
        case 'FETCH_USERS_START':
            return {
                ...state,
                fetching: true
            }
        case 'TOGGLE_PROP':
            return {
                ...state,
                toggled: !state.toggled
            }
        case 'HANDLE_CHANGE':
            return {
                ...state,
                [action.e.target.name]: action.e.target.value 
            }
        case 'UPVOTE_POST_SUCCESS':
            return {
                ...state,
                // photos: action.payload.photos,
                toggled: !state.toggled,
                likedPosts: [...state.likedPosts, action.payload.id]
            }
        default:
            return state;
    }
}

export default reducer;
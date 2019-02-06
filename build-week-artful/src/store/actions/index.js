import axios from 'axios';

export const login = user => dispatch => {
    axios
    .post("https://backend-art.herokuapp.com/api/login", user)
    .then(response =>
    dispatch({ type: 'LOGIN_SUCCESS', payload: user })
    )
    .catch(error => console.log(error.message));
}

export const logout = () => {
    console.log('logout');
    return {
        type: 'LOGOUT'
    }
}

export const signUp = user => dispatch => {
    console.log(user);
    axios
        .post("https://backend-art.herokuapp.com/api/register", user)
        .then(response =>
        dispatch({ type: 'SIGN_UP_SUCCESS', payload: response.data })
        )
        .catch(error => console.log(error.message));
}

export const toggleProp = () => {
    return {
        type: 'TOGGLE_PROP'
    }
}

export const getPhotos = () => dispatch => {
    dispatch({ type: 'FETCH_PHOTOS_START' });
    axios
      .get("https://backend-art.herokuapp.com/api/posts")
      .then(response =>
        dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: response.data })
      )
      .catch(error => dispatch({ type: 'FETCH_PHOTOS_FAILURE', payload: error }));
  };

  export const getUsers = () => dispatch => {
    dispatch({ type: 'FETCH_USERS_START' });
    axios
      .get("https://backend-art.herokuapp.com/api/users")
      .then(response =>
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data })
      )
      .catch(error => dispatch({ type: 'FETCH_USERS_FAILURE', payload: error }));
  };
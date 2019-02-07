import axios from 'axios';

export const login = user => dispatch => {
    axios
    .post("https://backend-art.herokuapp.com/api/login", user)
    .then(response =>
    {
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('username', user.username);
        return dispatch({ type: 'LOGIN_SUCCESS', payload: user })
    }
    )
    .catch(error => console.log(error.message));
}

export const stayLoggedIn = user =>  {
    console.log(user);
        return ({ type: 'LOGIN_SUCCESS', payload: user })
}

export const logout = () => {
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('username', '')
    return {
        type: 'LOGOUT'
    }
}

export const signUp = user => dispatch => {
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

  export const addPhoto = post => dispatch => {
      console.log('adding');
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            authorization: token,
        },
    }
    dispatch({ type: 'ADD_PHOTO_START' });
    axios
      .post("https://backend-art.herokuapp.com/api/posts", post, headers)
      .then(response => 
        dispatch({ type: 'ADD_POST_SUCCESS', payload: response.data })
      )
      .catch(error => console.log(error.message));
  };

  export const deletePost = id => dispatch => {
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            authorization: token,
        },
    }
    dispatch({ type: 'DELETE_POST_START' });
    axios
      .delete(`https://backend-art.herokuapp.com/api/posts/${id}`, headers)
      .then(response =>
        dispatch({ type: 'DELETE_POST_SUCCESS', payload: response.data })
      )
      .catch(error => dispatch({ type: 'DELETE_POST_FAILURE', payload: error }));
  };

  export const updatePost = (post, id) => dispatch => {
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            authorization: token,
        },
    }
    dispatch({ type: 'UPDATE_POST_START' });
    axios
      .put(`https://backend-art.herokuapp.com/api/posts/${id}`, post, headers)
      .then(response =>
        dispatch({ type: 'UPDATE_POST_SUCCESS', payload: response.data })
      )
      .catch(error => dispatch({ type: 'UPDATE_POST_FAILURE', payload: error }));
  };

  export const handleChange = e => {
    return {
        type: 'HANDLE_CHANGE',
        e
    }
}

export const upvote = id => dispatch => {

    dispatch({ type: 'UPVOTE_POST_START' });
    axios
      .put(`https://backend-art.herokuapp.com/api/posts/upvote/${id}`)
      .then(response => 
        dispatch({ type: 'UPVOTE_POST_SUCCESS', payload: {photos: response.data, id} })
      )
      .catch(error => dispatch({ type: 'UPVOTE_POST_FAILURE', payload: error }));
}
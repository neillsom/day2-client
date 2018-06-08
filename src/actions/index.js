import { API_BASE_URL } from '../config'



const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS'
const fetchStylesSuccess = (styles) => {
  return {
    type: FETCH_STYLES_SUCCESS,
    styles
  }
}

export const fetchStylesFromApi = () => {
  return (dispatch) => {

    fetch(`${API_BASE_URL}/styles`)
    .then(response => response.json())
    .then(styles => dispatch(fetchStylesSuccess(styles)))
    .catch(error => console.log(error))
  }
}

const registerUserSuccess = (user) => ({
  type: 'REGISTER_USER_SUCCESS',
  user
})

export const loginUserSuccess = (token) => ({
  type: 'LOGIN_USER_SUCCESS',
  token
})

export const registerUser = (username, password) => {
  return (dispatch) => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(json => dispatch(registerUserSuccess(json)))
    .catch(error => console.log(error))
  }
}

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(json => {
      const { authToken } = json
      localStorage.setItem('token', authToken)
      dispatch(loginUserSuccess(authToken))
    })
    .catch(error => console.log(error))
  }
}

export const getUserFavorites = () => {
  return (dispatch) => {
    const authToken = localStorage.getItem('token')
    fetch('http://localhost:8080/favorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }
}

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

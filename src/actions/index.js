const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS'
const fetchStylesSuccess = (styles) => {
  return {
    type: FETCH_STYLES_SUCCESS,
    styles
  }
}

export const fetchStylesFromApi = () => {
  return (dispatch) => {

    fetch('http://localhost:8080/styles')
    .then(response => response.json())
    .then(styles => dispatch(fetchStylesSuccess(styles)))
    .catch(error => console.log(error))
  }
}

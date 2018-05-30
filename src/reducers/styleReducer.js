const initialState = {
  styles: []
}

const styleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STYLES_SUCCESS':
      return {
        ...state,
        styles: action.styles
      }

    default:
      return state
  }
}

export default styleReducer

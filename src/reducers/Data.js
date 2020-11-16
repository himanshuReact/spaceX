const initialState = {
  data: [],
  loading: false
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_DATA': {
      return { ...state, loading: true }
      break
    }

    case 'DATA_SUCCESS': {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
      break
    }
  }

  return state
}

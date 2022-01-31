import axios from 'axios'
import { printOptions } from '../../Helpers/axiosHelper'

const authUser = {
  user: null,
}

export const getUserAuthState = () => async dispatch => {
  try {
    const res = await axios(printOptions('GET', '/api/authstate'))
    const { User } = res.data
    dispatch({ type: 'SET_AUTH', payload: User })
  } catch (err) {
    console.log(err)
  }
}

const reducer = (state = authUser, { type, payload }) => {
  switch (type) {
    case 'SET_AUTH':
      return {
        ...state,
        user: payload ? payload : '',
      }
    default:
      return state
  }
}

export default reducer

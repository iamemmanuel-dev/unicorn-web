import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import postsReducer from './reducers/postsReducer'

const rootReducer = combineReducers({
  Auth: authReducer,
  Posts: postsReducer,
})

export default rootReducer

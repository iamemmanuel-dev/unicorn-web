import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Register from './pages/Register/Register'
import UserConfig from './pages/userconfig/Userconfig'
import Home from './pages/Home/Home'
import Me from './pages/Me/Me'
import LoadingPage from './Helpers/LoadingPage'
import { getUserAuthState } from './redux/reducers/authReducer'
import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAuthState())
  }, [])

  return (
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/me'>
        <Me />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path='/success/userconfig/:username/:id'>
        <UserConfig />
      </Route>
      <Route exact path='/load'>
        <LoadingPage />
      </Route>
    </Router>
  )
}

export default App

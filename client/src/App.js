import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import UserConfig from './pages/userconfig/Userconfig'
import Home from './pages/Home/Home'
import Me from './pages/Me/Me'
import './App.css'

const App = () => {
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
    </Router>
  )
}

export default App

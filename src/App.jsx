// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './components/Home'
import ManipulateUsers from './components/ManipulateUsers'
import UserDetail from './components/UserDetail'
import Analytics from './components/Analytics'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/manipulate'>Manipulate Users</Link>
          </li>
          <li>
            <Link to='/analytics'>Analytics</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/manipulate' element={<ManipulateUsers />} />
            <Route path='/user/:userId' element={<UserDetail />} />
            <Route path='/analytics' element={<Analytics />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App

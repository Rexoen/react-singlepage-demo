import React from 'react'
// BrowserRouter: 浏览器中以斜杠标识
import { BrowserRouter as Router,Routes,Route,Switch } from 'react-router-dom'
// HashRoute: 浏览器中用#标识
// import { HashRouter as Router,Routes,Route,Switch } from 'react-router-dom'
import App from './pages/app'
import Login from './pages/login'
import Home from './pages/home'

export default function IRouter(){
    return <Router>
            <Routes>
            <Route exact path="/" element={<App/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            </Routes>
        </Router>
}

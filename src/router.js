import React from 'react'
// BrowserRouter: 浏览器中以斜杠标识
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// HashRoute: 浏览器中用#标识
// import { HashRouter as Router,Routes,Route,Switch } from 'react-router-dom'
import App from './pages/app'
import Login from './pages/login'
import Home from './pages/home'
import Detail from './pages/detail'
import NoMatch from './pages/404'
// 动态路由匹配
export default function IRouter(){
    return <Router>
            <Routes>
            <Route path="*" element={<NoMatch />}></Route>
            <Route exact path="/" element={<App/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            </Routes>
        </Router>
}

import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import './app.scss';
// import 'antd/dist/antd.css'
// 无状态组件 可以使用Hooks
export default function App(){
   return <div className="container">
           <h1>Hello there!</h1>
       <Link to="/login">Redirect to login page</Link>
       <br/>
       <Link to="/home">Redirect to home page</Link>
       </div>
}

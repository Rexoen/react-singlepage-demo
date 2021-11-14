import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import './app.scss';
import 'antd/dist/antd.css'
// 无状态组件
export default function App(){
   return <div className="container">
           <h1>Hello there!</h1>
       <Link to="/login">Redirect to login page</Link>
       <br/>
       <Link to="/home">Redirect to home page</Link>
       </div>
}

// 有状态组件
//export default class App extends React.Component{
    // handleJump = () =>{
        // window.location.href='/login'
        // // this.props.history.push('/login');
    // }
    // render(){
    // return <div className="container">
            // <h1>Hello there!</h1>
        // <Link to="/login">Redirect to login page</Link>
        // <br/>
        // <Link to="/home">Redirect to home page</Link>
        // <br/>
        // <Button onClick={this.handleJump}>Login redirect</Button>
        // </div>

    // }
// }

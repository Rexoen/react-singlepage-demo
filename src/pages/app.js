import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import './app.scss';
// import 'antd/dist/antd.css'
// 无状态组件 可以使用Hooks
export default function App(){
    // useState 相当于 构造函数中初始化 state
   const [count,setCount] = useState(12);
    // useEffect 相当于类组件中 componentWillMount 和 componentDidMount
    // 仅在首次渲染的时候执行一次,需要把第二个参数设为空数组
    useEffect(()=>{
        console.log('useEffect executed!')
        setCount(100)
    },[])
   return <div className="container">
           <h1>Hello there!</h1>
       <Link to="/login">Redirect to login page</Link>
       <br/>
       <Link to="/home">Redirect to home page</Link>
        <p>
        Now the count is: {count}
        </p>
        <Button onClick={()=>{setCount(count+1)}}>UpdateCount</Button>
       </div>
}

// 有状态组件
// export default class App extends React.Component{
    // state = {
        // count:10
    // }
    // handleUpdate = () => {
        // this.setState({
            // count:this.state.count+1
        // })
    // }
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

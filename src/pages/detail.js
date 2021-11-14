import React from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom'
import { Button } from 'antd'
// import './app.scss';
// 无状态组件
export default function Detail(){
    const params = useParams();
    const navigate = useNavigate();
   return <div className="container">
           <h1>Hello there!</h1>
           <p>Present ID: {params.id}</p>
        <Button onClick={()=>{
            navigate('/')
        }}>Redirect2MainPage</Button>
       </div>
}

// 有状态组件
//export default class Detail extends React.Component{
//   handleJump = () =>{
//       window.location.href='/login'
//       // this.props.history.push('/login');
//   }
//   render(){
//   return <div className="container">
//           <h1>Hello there!</h1>
//           <p>Present ID: {this.props.match.params.id}</p>
//       </div>
//
//   }
//}

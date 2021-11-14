import React,{useState,useEffect} from 'react';
import './app.scss'
import {Link} from 'react-router-dom'
import { Table } from 'antd'
import axios from 'axios'
import './home.scss'

// 函数式组件+hooks实现页面交互
export default function Home(){
    const [data,setData] = useState([]);
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        axios.get('/data.json').then((response)=>{
            const res = response.data;
            if (res.code === 0){
                setData(res.data);
            }
        })
    },[]);

    const columns = [
        {
            title:'Country',
            dataIndex:'country',
        },{
            title:'PHP',
            dataIndex:'php'
        },{
            title:'Node',
            dataIndex:'node'
        },{
            title:'Java',
            dataIndex:'java'
        },{
            title:'JS',
            dataIndex:'js'
        },{
            title:'Python',
            dataIndex:'python'
        }
    ];
    return <div className="home">
        <h1>Language User Report</h1>
        <div className="wrap">
                <div className="nav">
        <a className={index == 0 ? "checked": ""} onClick={()=>{setIndex(0)}}>Recent</a>
        <a className={index == 1 ? "checked": ""} onClick={()=>{setIndex(1)}}>Map</a>
        <a className={index == 2 ? "checked": ""} onClick={()=>{setIndex(2)}}>HotClick</a>
        <a className={index == 3 ? "checked": ""} onClick={()=>{setIndex(3)}}>Broadcast</a>
        </div>
            <p>The data displayed are pure fictionary</p>
            <Table
                bordered pagination={false} columns={columns} dataSource={data} />
        <Link to="/" className="nav-link">Back to firstpage</Link>
        </div>
    </div>
}

// class组件实现页面交互
// export default class Home extends React.Component{
    // // 初始化表格页面表格和Tab索引状态
    // state = {
        // data:[],
        // index:0
    // }
    // componentDidMount(){
        // axios.get('/data.json').then((response)=>{
            // const res = response.data;
            // if (res.code === 0){
                // this.setState({
                    // data:res.data
            // })
        // }
    // })
    // }
    // handleSwitch = (index)=>{
        // this.setState({
            // index
        // })

    // }
    // render(){
    // const columns = [
        // {
            // title:'Country',
            // dataIndex:'country',
        // },{
            // title:'PHP',
            // dataIndex:'php'
        // },{
            // title:'Node',
            // dataIndex:'node'
        // },{
            // title:'Java',
            // dataIndex:'java'
        // },{
            // title:'JS',
            // dataIndex:'js'
        // },{
            // title:'Python',
            // dataIndex:'python'
        // }
    // ]
    // const index = this.state.index
    // return <div className="home">
        // <h1>Language User Report</h1>
        // <div className="wrap">
                // <div className="nav">
        // <a className={index == 0 ? "checked": ""} onClick={()=>{this.handleSwitch(0)}}>Recent</a>
        // <a className={index == 1 ? "checked": ""} onClick={()=>{this.handleSwitch(1)}}>Map</a>
        // <a className={index == 2 ? "checked": ""} onClick={()=>{this.handleSwitch(2)}}>HotClick</a>
        // <a className={index == 3 ? "checked": ""} onClick={()=>{this.handleSwitch(3)}}>Broadcast</a>
        // </div>
            // <p>The data displayed are pure fictionary</p>
            // <Table
                // bordered pagination={false} columns={columns} dataSource={this.state.data} />
        // <Link to="/" className="nav-link">Back to firstpage</Link>
        // </div>
    // </div>

    // }
// }

import React from 'react';
import './app.scss'
import {Link} from 'react-router-dom'
import { Table } from 'antd'
import './home.scss'

export default function Home(){
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
    const data = [{
    }];
    return <div className="home">
        <h1>Language User Report</h1>
        <div className="wrap">
                <div className="nav">
        <a className="checked">Recent</a>
        <a>Map</a>
        <a>HotClick</a>
        <a>Broadcast</a>
        </div>
            <p>The data displayed are pure fictionary</p>
            <Table
                bordered columns={columns} dataSource={data} />
        <Link to="/" className="nav-link">Back to firstpage</Link>
        </div>
    </div>
}

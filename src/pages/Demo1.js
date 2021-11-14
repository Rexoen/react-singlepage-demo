import React from 'react';
import {Input,Button,Select} from 'antd';
import 'antd/dist/antd.css';
import './Demo1.scss';
const Search = Input.Search;
const Option = Select.Option;

class App extends React.Component{
    state = {
        val : '',
        list:[]
    }
    handleChange = (event) => {
        let val = event.target.value;
        this.setState({
            val
        })
        }
    handleAdd = () => {
        let {val,list} = this.state;
        list.push(val)
        this.setState({
            list
    })
    }
    handleSearch = (val) => {
        let {list} = this.state
        list.push(val)
        this.setState({
            list
    })

    }

    render(){
        const {val,list} = this.state;
        const options = [];
        return <div>
        <p>This is my first line of codes in react!</p>
        <h1>Hello World!</h1>
        <Input type="text" value={val} style={{width:300}} onChange={this.handleChange}/>
        <Button type="primary" onClick={this.handleAdd}>Add</Button>
        <ul>
            {
                list.map((item,index)=>{
                    options.push(<Option key={index}>{item}</Option>);
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
        <div>
            <Search enterButton="Add" style={{width:370}} onSearch={this.handleSearch}></Search>
            <br/>
            <Select style={{width:300}}>
                {options}
            </Select>
        </div>

      </div>

    }
}

// 官方默认生成的写法(函数式)
//function App() {
//  return (
//      <div>
//        <p>This is my first line of codes in react!</p>
//        <h1>Hello World!</h1>
//        <input type=text onChange={}>
//      </div>
//  );
//}

export default App;

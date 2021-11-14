import React from 'react';
import './App.scss';

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

    render(){
      const {val,list} = this.state;
        return <div>
        <p>This is my first line of codes in react!</p>
        <h1>Hello World!</h1>
        <input type="text" value={val} onChange={this.handleChange}/>
        <button onClick={this.handleAdd}>Add</button>
        <ul>
            {
                list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>

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

import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Form,Input,Button} from 'antd'
import axios from 'axios';
const FormItem = Form.Item


export default function Login(){
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
    return <Form className="login-form">
            <FormItem>
                <Input placeholder="Please type your username" maxLength={5} onChange={(event)=>setName(event.target.value)}></Input>
            </FormItem>
            <FormItem>
                <Input placeholder="Please type your password" maxLength={20} type="password"onChange={(event)=>setPassword(event.target.value)}></Input>
            </FormItem>
            <label>{'Username:'+name+' Password:'+password}</label>
            <FormItem>
        <Button type="primary" onClick={()=>{login(name,password).then((response)=>{
            let res = response.data;
            if (res.code === 0){
                navigate('/home')
            }
        })}}>Login</Button>
            </FormItem>
        </Form>
}

function login(name,pwd){
    return axios.get('/login.json',{
        params:{
            name,pwd
        }
    });
}

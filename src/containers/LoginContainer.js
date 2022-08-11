import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoginPage from "../com/loginPage";
import "../modules/member";

export default function Loginpage(){
    const member = useSelector(state => state.member);
    const [cklogin,setCklogin] = useState(false);
    const [inputs,setInputs] = useState({
        id: "",
        password: ""
    }); 
    const { id, password } = inputs;
    const onSearch = useCallback(text => setInputs(text));
    
    useEffect(()=>{
        findMember(member);
    },[inputs]);

    const findMember = (info) => {
        console.log(inputs);
        if(info.find((item) => item.id === id && item.password === password)){
            console.log("성공");
            setCklogin(true)
        }else{
            console.log("실패");
        }
    }

    return <LoginPage onSearch={onSearch} cklogin={cklogin} userName={inputs.id}/>
}
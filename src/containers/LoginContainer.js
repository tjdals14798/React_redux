import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../com/loginPage";

export default function Loginpage(){
    const member = useSelector(state => state.member);
    const dispatch = useDispatch();
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
        if(info.find((item) => item.id === id && item.password === password)){
            setCklogin(true)
        }
    }

    const onLogOut = () => {
        setCklogin(false);
    }

    return <LoginPage onSearch={onSearch} cklogin={cklogin} userName={inputs.id} onLogOut={onLogOut}/>
}
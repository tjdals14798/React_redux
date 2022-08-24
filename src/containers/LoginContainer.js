import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../com/loginPage";
import { changeNickname } from "../modules/member";
import "../modules/post";

export default function Loginpage(){
    const member = useSelector(state => state.member);
    const post = useSelector(state => state.post);  //post state
    const dispatch = useDispatch();
    const [cklogin,setCklogin] = useState(false);
    const [postIndex,setPostIndex] = useState(0);   //post state
    const [inputs,setInputs] = useState({
        id: "",
        password: ""
    }); 
    const { id, password } = inputs;
    const onSearch = useCallback(text => setInputs(text));
    const onNChange = useCallback(text => dispatch(changeNickname(text),[dispatch]));
    
    const setIndex = idx => setPostIndex(idx);
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

    return <LoginPage onSearch={onSearch} cklogin={cklogin} userName={inputs.id} onLogOut={onLogOut} onNChange={onNChange} post={post} setIndex={setIndex} postIndex={postIndex}/>
}
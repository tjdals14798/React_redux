import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MemberInfo from "../com/memberInfo";
import "../modules/member";
import { addMember, removeMember } from "../modules/member";

function MemberContainer(){
    const member = useSelector(state => state.member);
    const dispatch = useDispatch();

    useEffect(()=>{
        findMember(member);
    });

    const [cklogin,setCklogin] = useState(false);

    const [inputs,setInputs] = useState({
        id: "",
        password: ""
    }); 
    const { id, password } = inputs;
    
    const findMember = (info) => {
        if(member.find((item) => item.id === id && item.password === password)) setCklogin(true)
    }
    const onSearch = useCallback(text => setInputs(text));

    const onCreate = text => dispatch(addMember(text));
    const onRemove = useCallback(id => dispatch(removeMember(id),[dispatch]));
    return <MemberInfo member={member} onCreate={onCreate} onRemove={onRemove} onSearch={onSearch} cklogin={cklogin}/>
}

export default MemberContainer;
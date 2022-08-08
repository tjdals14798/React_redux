import React from "react";
import { useSelector } from "react-redux";
import MemberInfo from "../com/memberInfo";
import "../modules/member";

function MemberContainer(){
    const member = useSelector(state => state.member);
    return <MemberInfo member={member}/>
}

export default MemberContainer;
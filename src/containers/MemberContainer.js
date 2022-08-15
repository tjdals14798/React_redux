import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import MemberInfo from "../com/memberInfo";
import { addMember, removeMember } from "../modules/member";

function MemberContainer(){
    const member = useSelector(state => state.member);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addMember(text));
    const onRemove = useCallback(id => dispatch(removeMember(id),[dispatch]));
    return <MemberInfo member={member} onCreate={onCreate} onRemove={onRemove}/>
}

export default MemberContainer;
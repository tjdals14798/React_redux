import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import MemberInfo from "../com/memberInfo";
import { addMember, removeMember, changeNickname } from "../modules/member";

function MemberContainer(){
    const member = useSelector(state => state.member);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addMember(text));
    const onRemove = useCallback(id => dispatch(removeMember(id),[dispatch]));
    const onNChange = useCallback(text => dispatch(changeNickname(text),[dispatch]));
    return <MemberInfo member={member} onCreate={onCreate} onRemove={onRemove} onNChange={onNChange}/>
}

export default MemberContainer;
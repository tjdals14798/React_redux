import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "../com/moviePage";
import { addMember } from "../modules/member";
import { changeSeat } from "../modules/ticket";

export default function MovieContainer(){
    const member = useSelector(state => state.member);
    const ticket = useSelector(state => state.ticket);
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addMember(text));
    const onSChange = useCallback(text => dispatch(changeSeat(text.seatArr,text.seatIndex,text.movieNum),[dispatch]));

    return <MoviePage member={member} onCreate={onCreate} ticket={ticket} onSChange={onSChange}/>
}
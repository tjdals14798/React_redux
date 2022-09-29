import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "../com/moviePage";
import { addMember } from "../modules/member";
import "../modules/ticket";

export default function MovieContainer(){
    const member = useSelector(state => state.member);
    const ticket = useSelector(state => state.ticket);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addMember(text));

    return <MoviePage member={member} onCreate={onCreate} ticket={ticket}/>
}
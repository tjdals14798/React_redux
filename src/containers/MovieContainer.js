import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "../com/moviePage";
import { addMember } from "../modules/member";

export default function MovieContainer(){
    const member = useSelector(state => state.member);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addMember(text));

    return <MoviePage member={member} onCreate={onCreate}/>
}
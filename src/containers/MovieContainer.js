import React from "react";
import { useSelector } from "react-redux";
import MoviePage from "../com/moviePage";

export default function MovieContainer(){
    const member = useSelector(state => state.member);

    return <MoviePage member={member}/>
}
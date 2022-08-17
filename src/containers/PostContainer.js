import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostPage from "../com/postPage";

export default function PostContainer(){
    const post = useSelector(state => state.post);
    
    return <PostPage post={post}/>
}
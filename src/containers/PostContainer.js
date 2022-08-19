import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostPage from "../com/postPage";

export default function PostContainer(){
    const post = useSelector(state => state.post);
    const [postIndex,setPostIndex] = useState(0);

    const setIndex = idx => setPostIndex(idx);
    
    return <PostPage post={post} setIndex={setIndex} postIndex={postIndex}/>
}
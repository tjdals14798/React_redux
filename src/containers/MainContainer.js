import React from "react";
import MainPage from "../com/mainPage";
import "../modules/main"
import { useSelector } from "react-redux";

export default function MainContainer(){
    const img = useSelector(state => state.main);

    console.log(img[0].src)

    return <MainPage img={img}/>
}

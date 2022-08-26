import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Shoping from "../com/shopingPage";
import  "../modules/shoping";

function ShopingContainer (){
    const shoping = useSelector(state => state.shoping);
    console.log(shoping)

    return <Shoping/>
}

export default ShopingContainer;
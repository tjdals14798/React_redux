import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Shoping from "../com/shopingPage";
import  "../modules/shoping";
import {addCart} from "../modules/cart";

function ShopingContainer (){
    const shoping = useSelector(state => state.shoping);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const onCart = text => dispatch(addCart(text));

    return <Shoping shoping={shoping} cart={cart} onCart={onCart}/>
}

export default ShopingContainer;
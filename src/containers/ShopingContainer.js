import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Shoping from "../com/shopingPage";
import  "../modules/shoping";
import {addCart,removeCart} from "../modules/cart";

function ShopingContainer (){
    const shoping = useSelector(state => state.shoping);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const onCart = text => dispatch(addCart(text));
    const onRemove = useCallback(id => dispatch(removeCart(id),[dispatch]));
    return <Shoping shoping={shoping} cart={cart} onCart={onCart} onRemove={onRemove}/>
}

export default ShopingContainer;
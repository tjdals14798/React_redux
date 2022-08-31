import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Shoping from "../com/shopingPage";
import  "../modules/shoping";
import {addCart,removeCart} from "../modules/cart";

function ShopingContainer (){
    const shoping = useSelector(state => state.shoping);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [shopingidx,setShopingIdx] = useState(0);

    const onCart = text => dispatch(addCart(text));
    const onItemIdx = idx => setShopingIdx(idx);
    const onRemove = useCallback(id => dispatch(removeCart(id),[dispatch]));
    return <Shoping shoping={shoping} cart={cart} onCart={onCart} onRemove={onRemove} shopingidx={shopingidx} onItemIdx={onItemIdx}/>
}

export default ShopingContainer;
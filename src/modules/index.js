import { combineReducers } from 'redux';
import member from './member';
import post from './post';
import shoping from './shoping';
import cart from './cart';

const rootReducer = combineReducers ({
    member,
    post,
    shoping,
    cart
});

export default rootReducer;
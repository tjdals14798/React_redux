import { combineReducers } from 'redux';
import member from './member';
import post from './post';
import shoping from './shoping';
import cart from './cart';
import main from './main';

const rootReducer = combineReducers ({
    main,
    member,
    post,
    shoping,
    cart
});

export default rootReducer;
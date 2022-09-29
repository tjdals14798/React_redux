import { combineReducers } from 'redux';
import member from './member';
import post from './post';
import shoping from './shoping';
import cart from './cart';
import main from './main';
import ticket from './ticket';

const rootReducer = combineReducers ({
    main,
    member,
    post,
    shoping,
    cart,
    ticket
});

export default rootReducer;
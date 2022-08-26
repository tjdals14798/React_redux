import { combineReducers } from 'redux';
import member from './member';
import post from './post';
import shoping from './shoping';

const rootReducer = combineReducers ({
    member,
    post,
    shoping
});

export default rootReducer;
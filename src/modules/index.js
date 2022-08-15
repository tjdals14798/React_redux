import { combineReducers } from 'redux';
import member from './member';
import post from './post';

const rootReducer = combineReducers ({
    member,
    post
});

export default rootReducer;
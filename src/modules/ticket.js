const CHANGE_SEAT = 'ticket/CHANGE_SEAT';

export const changeSeat = (arr,idx) =>({
    type: CHANGE_SEAT,
    arr,
    idx
});

const initialState = [
    [1,1,0,1,1,0,0,0,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1],
];

export default function ticket( state = initialState, action ){
    
    switch (action.type) {
        case CHANGE_SEAT :
            state[action.arr].splice(action.idx,1,2)
            return state;
            // return {}
            // console.log(state[action.arr].splice(action.idx,13,2));
        default:
            return state;
    }
}
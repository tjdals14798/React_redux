const ADD_CART = 'cart/ADD_CART';
let nextId=0;
export const addCart = text => ({
    type: ADD_CART,
    item: {
        id: nextId++,
        itemName:text.itemName,
        itemMoney:text.itemMoney,
    }
});
const initialState = [
    {
        id:'',
        itemName:'',
        itemMoney:'',
    },
]

export default function Cart( state = initialState, action ){
    switch (action.type) {
        case ADD_CART:
            return(state.concat(action.item))
        default:
            return state;
    }
};
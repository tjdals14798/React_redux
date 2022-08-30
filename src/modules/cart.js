const ADD_CART = 'cart/ADD_CART';
const REMOVE_CART = 'cart/REMOVE_CART';

let nextId=0;

export const addCart = text => ({
    type: ADD_CART,
    item: {
        id: nextId++,
        itemName:text.itemName,
        itemMoney:text.itemMoney,
    }
});

export const removeCart = id => ({
    type: REMOVE_CART,
    id
});

const initialState = [
];

export default function Cart( state = initialState, action ){
    switch (action.type) {
        case ADD_CART:
            return(state.concat(action.item))
        case REMOVE_CART:
            return state.filter(
                cart =>
                cart.id !== action.id
            );
        default:
            return state;
    }
};
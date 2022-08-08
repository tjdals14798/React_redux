const initialState = [
    {
        id: "redux",
        password: "123",
        nickname: "리덕스"
    },
    {
        id: "redux1",
        password: "123",
        nickname: "리덕수"
    }
];

export default function member ( state = initialState, action ){
    switch (action.type) {      
        default:
            return state;
    }
}
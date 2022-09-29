const ADD_MEMBER = 'member/ADD_MEMBER';
const REMOVE_MEMBER = 'member/REMOVE_MEMBER';
const CHANGE_NICKNAME = 'member/CHANGE_NICKNAME';

export const addMember = text => ({
    type: ADD_MEMBER,
    mem: {
        id: text.id,
        password: text.password,
        nickname: text.nickname
    }
});

export const removeMember = id => ({
    type: REMOVE_MEMBER,
    id
});

export const changeNickname = (cName,cNick) =>({
    type: CHANGE_NICKNAME,
    mem: {
        id: cName,
        nickname: cNick
    }
});

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
        case ADD_MEMBER:
            return state.concat(action.mem);
        case REMOVE_MEMBER:
            return state.filter(
                mem =>
                mem.id !== action.id
            );
        case CHANGE_NICKNAME:
            return state.map(
                    mem =>
                    mem.id === action.mem.id
                    ? {...mem, nickname: action.mem.nickname} 
                    :mem
                );
        default:
            return state;
    }
}
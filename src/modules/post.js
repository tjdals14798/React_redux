const ADD_POST = "/post/ADD_POST";

let nextKey = 2;

export const addPost = ( pId, text ) => ({
    type: ADD_POST,
    post: {
        key: nextKey++,
        id: pId,
        postname: text.postname,
        postcontent: text.postcontent
    }
});

const initialState = [
    {
        key:0,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },
    {
        key:1,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    }
];

export default function post(state = initialState, action){
    switch (action.type) {
        case ADD_POST :
            return state.concat(action.post);
        default :
            return state;
    }
}
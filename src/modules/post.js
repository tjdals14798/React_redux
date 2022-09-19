const ADD_POST = "/post/ADD_POST";

let nextKey = 14;

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
    },{
        key:1,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    },{
        key:2,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },{
        key:3,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    },{
        key:4,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },{
        key:5,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    },{
        key:6,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },{
        key:7,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    },{
        key:8,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },{
        key:9,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    },{
        key:10,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },{
        key:11,
        id: "관리자",
        postname: "테스트",
        postcontent: "테스트"
    },{
        key:12,
        id: "관리자",
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },{
        key:13,
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
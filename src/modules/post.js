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

        default :
            return state;
    }
}
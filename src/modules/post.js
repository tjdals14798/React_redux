
const initialState = [
    {
        id: 1,
        postname: "공지사항",
        postcontent: "글쓰는 법"
    },
    {
        id: 2,
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
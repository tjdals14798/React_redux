import React, { useEffect, useState } from "react";
import axios from "axios";

// axios에는 GET, POST, PUT, DELETE 등의 메서드로 API 요청이 가능하다.
//  요청에 대한 상태를 관리하기 위해서는 3가지 상태를 관리해야한다.
//     1. 요청의 결과(data)
//     2. 로딩 상태(loading)
//     3. 에러 (error)

export default function AxiosPage(){

    const [users,setUsers] = useState(null);
    const [loading,setLoding] = useState(false);
    const [error,setError] = useState(null);

    const fetchUsers = async () =>{   
        try {
            // 요청시 error, users 초기화
            setError(null);
            setUsers(null);
            // loding를 true로 변경
            setLoding(true);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (e){
            setError(e);
        }
        setLoding(false);
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러</div>;

    if(!users) return null;

    return(
        <>
        <ul>
            {users.map( user =>(
                <li key={user.id}>
                    {user.username} ({user.username})
                </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )
}
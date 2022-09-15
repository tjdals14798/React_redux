import React, { useState,useEffect } from "react";
import axios from "axios";
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Heder(){
    return(
        <>
            <h1 style={{textAlign:"left"}}>시집이</h1>
            <hr/>
            <Navbar collapseOnSelect className="w-75" expand="lg">
                <Container style={{cursor:'pointer',color:"white"}}>                         
                    <Nav><li>영화</li><li>극장</li><li>예매</li><li>스토어</li><li>이벤트</li></Nav>
                </Container>
            </Navbar>
            <img className="d-block w-75" style={{ height:"500px",borderTop:"2px solid red" }} src={require("../codeimg/dragon.jpg")}/>
        <style>
        {`
            li{
                display:block;
                float: left;
                list-style:none;
                padding-left:40px;
                color:black;
                height:30px;
            }
            hr{
                margin:0px;
                width:75%;
            }
        `}
        </style>
        </>
    )
}

function Movie({ movies }){
    return(
        <>
            {/* <ul>
            {movies.map( movie =>(
                <li key={movie.Title}>
                    {movie.Title} 
                </li>
            ))}
            </ul> */}
            <style>
                {`
                    
                `}
            </style>
        </>
    )
}

export default function MoviePage(){
    const [movie,setMovie] = useState(null);
    const [loading,setLoding] = useState(false);
    const [error,setError] = useState(null);
    const [jsonMovie,setJsonMovie] = useState([]);

    const fetchUsers = async () =>{   
        try {
            // 요청시 error, users 초기화
            setError(null);
            setMovie(null);
            // loding를 true로 변경
            setLoding(true);
            const response = await axios.get(
                'http://www.omdbapi.com/?apikey=342d473&s=ironman'
            );
            setMovie(response.data);
            console.log(response.data)
        } catch (e){
            setError(e);
        }
        setLoding(false);
    }

    useEffect(()=>{
        let json = JSON.stringify(fetchUsers());
        console.log(json)
    },[]);
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러</div>;
    if(!movie) return null;

    return(
        <>
            <Heder/>
            <Movie movies={movie}/>
        </>
    )
}
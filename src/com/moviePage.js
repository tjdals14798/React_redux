import React, { useState,useEffect } from "react";
import axios from "axios";
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

function Heder(){
    return(
        <>
            <h1 style={{textAlign:"left"}}>시집이</h1>
            <hr id="movie_heder"/>
            <Navbar collapseOnSelect className="w-75" expand="lg">
                <Container style={{cursor:'pointer',color:"white"}}>                         
                    <Nav><li className="movie_li">영화</li><li className="movie_li">극장</li><li className="movie_li">예매</li><li className="movie_li">스토어</li><li className="movie_li">이벤트</li></Nav>
                </Container>
            </Navbar>
            <img className="d-block w-75" style={{ height:"500px",borderTop:"2px solid red",width:"100%"}} src={require("../codeimg/dragon.jpg")}/>
        <style>
        {`
            .movie_li{
                display:block;
                float: left;
                list-style:none;
                padding-left:40px;
                color:black;
                height:30px;
            }
            #movie_heder{
                margin:0px;
                width:75%;
            }
        `}
        </style>
        </>
    )
}

function Movie({ movies, setCurrentPage, currentPage }){
    return(
        <>
        <Container fluid>
            <h1 className="mt-2" style={{textAlign:"left"}}>무비 차트</h1>
            <Button size="lg" variant="secondary" onClick={()=>setCurrentPage(currentPage-1)} style={{position: 'relative', zIndex:"10", left: "-85%", top:120 ,borderRadius:"50px"}}><h3><ChevronLeft/></h3></Button>
            {movies.map((movie,i) =>(
                <li key={i} style={{float: "left", listStyle:"none", marginLeft:"7px"}}>
                 <Card style={{ width: '14rem', height:"330px" }}>
                 <Card.Img variant="top" src={movie.Poster} style={{height:"200px"}}/>
                 <Card.Body>
                   <Card.Title>{movie.Title}</Card.Title>
                   <Card.Text>
                     개봉연도:{movie.Year}
                   </Card.Text>
                 </Card.Body>
               </Card>
               </li>
            ))}
            <Button size="lg" variant="secondary" onClick={()=>setCurrentPage(currentPage+1)} style={{position: 'relative', zIndex:"10", right: "15%", top:120 ,borderRadius:"50px"}}><h3><ChevronRight/></h3></Button>
            </Container>
        </>
    )
}

export default function MoviePage(){
    const [movie,setMovie] = useState(null);
    const [loading,setLoding] = useState(false);
    const [error,setError] = useState(null);

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
            setMovie(response.data.Search);
        } catch (e){
            setError(e);
        }
        setLoding(false);
    }

    useEffect(()=>{
        JSON.stringify(fetchUsers());
    },[]);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러</div>;
    if(!movie) return null;

    return(
        <>
            <Heder/>
            <Movie movies={currentPosts(movie)} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

            <style>
                {`
                    width:100;
                `}
            </style>
        </>
    )
}
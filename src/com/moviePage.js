import React, { useState,useEffect } from "react";
import axios from "axios";
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

function Heder(){
    return(
        <div className="contentDiv">
            <h1 style={{textAlign:"left"}}>시집이</h1>
            <hr id="movie_heder"/>
            <Navbar collapseOnSelect className="w-100" expand="lg">
                <Container style={{cursor:'pointer',color:"white"}}>                         
                    <Nav><li className="movie_li">영화</li><li className="movie_li">극장</li><li className="movie_li">예매</li><li className="movie_li">스토어</li><li className="movie_li">이벤트</li></Nav>
                </Container>
            </Navbar>
            <img className="d-block w-100" style={{ height:"500px",borderTop:"2px solid red"}} src={require("../codeimg/dragon.jpg")}/>
        </div>
    )
}

function Movie({movies, setCurrentPage, currentPage }){
    return(
        <div className="contentDiv">
        <Container fluid>
            <h1 className="mt-2" style={{textAlign:"left"}}>무비 차트</h1>
            {movies.map((movie,i) =>(
                <li key={i} style={{position: 'sticky', float: "left", listStyle:"none", marginLeft:"7px"}}>
                 <Card style={{ width: '14rem', height:"300px" }}>
                 <Card.Img variant="top" src={require("../codeimg/noimg.gif")} style={{height:"200px"}}/>
                 <Card.Body>
                   <Card.Title style={{ overflow:"hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{movie.movieNm}</Card.Title>
                   <Card.Text>
                     개봉일:{movie.openDt}
                   </Card.Text>
                 </Card.Body>
               </Card>
               </li>
            ))}
            <div className="contentDiv" style={{position:"relative", minWidth:"1200px"}}>
            <Button variant="secondary" onClick={()=>setCurrentPage(currentPage-1)} style={{position: 'absolute', zIndex:"10", left: "-1.5%", top:170 ,borderRadius:"50px"}}><h3><ChevronLeft/></h3></Button>
            <Button variant="secondary" onClick={()=>setCurrentPage(currentPage+1)} style={{position: 'absolute', zIndex:"10", right: "1.5%", top:170 ,borderRadius:"50px"}}><h3><ChevronRight/></h3></Button>
            </div>
        </Container>
        </div>
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
                'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101'
            );
            setMovie(response.data.boxOfficeResult.dailyBoxOfficeList);
        } catch (e){
            setError(e);
        }
        setLoding(false);
    }

    useEffect(()=>{
        JSON.stringify(fetchUsers());
    },[]);
    console.log(movie)
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
        <div style={{position:"relative", width:"100%", minWidth:"1280px"}}>
            <Heder/>
            <Movie movies={currentPosts(movie)} setCurrentPage={setCurrentPage} currentPage={currentPage} />

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
            }
            .contentDiv{
                width:1200px;
            }
        `}
        </style>
        </div>
    )
}
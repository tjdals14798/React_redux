import React, { useState,useEffect } from "react";
import axios from "axios";
import { Container, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronRight, ChevronLeft, ChevronUp } from 'react-bootstrap-icons';

function Heder(){
    return(
        <div className="contentDiv">
            <div className="hederContents">
                <h1><a>시집이</a></h1>
                <ul>
                    <li>로그인</li><li>회원가입</li>
                </ul>
            </div>
            <hr/>
            <Nav className="my-2"><li className="movie_li">영화</li><li className="movie_li">극장</li><li className="movie_li">예매</li><li className="movie_li">스토어</li><li className="movie_li">이벤트</li></Nav>
            <img className="d-block w-100" style={{ height:"500px",borderTop:"2px solid red"}} src={require("../codeimg/dragon.jpg")}/>
        </div>
    )
}

function Movie({ movies, setCurrentPage, currentPage }){
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 70) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }

    useEffect(() => {
        function scrollListener() {
        window.addEventListener("scroll", handleScroll);
        } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
        window.removeEventListener("scroll", handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
    });

    const topScroll = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

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
            <div className="contentDiv">
                <Button variant="secondary" onClick={()=>setCurrentPage(currentPage-1)} style={{position: 'absolute', zIndex:1, left: "-1.5%", top:170 ,borderRadius:"50px"}}><h3><ChevronLeft/></h3></Button>
                <Button variant="secondary" onClick={()=>setCurrentPage(currentPage+1)} style={{position: 'absolute', zIndex:1, right: "1.5%", top:170 ,borderRadius:"50px"}}><h3><ChevronRight/></h3></Button>
            </div>
            {ScrollActive && <div style={{position:"fixed", bottom:"20px", right:"11.2%"}}>
                    <Button variant="danger" size="lg" style={{ zIndex:2, borderRadius:"50px"}}>예매하기</Button >{' '}
                    <Button variant="outline-dark" size="lg" onClick={topScroll} style={{zIndex:2, borderRadius:"20px", alignItems:"center"}}><ChevronUp/></Button>
                </div>}
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
        <Container>
        <div style={{position:"relative", width:"100%", minWidth:"1280px"}}>
            <Heder/>
            <Movie movies={currentPosts(movie)} setCurrentPage={setCurrentPage} currentPage={currentPage} />

            <style>
        {`
            .movie_li{
                display:block;
                float: left;
                padding-left:40px;
                color:black;
                height:30px;
                cursor:pointer;
            }
            ol, ul{
                list-style:none;
            }

            .contentDiv{
                width:1200px;
                position:relative;
                minWidth:1200px;
            }

            .hederContents{
                display:flex;
                justify-content:space-between;
            }
            .hederContents ul{
                display:flex;
                align-items:center;
            }
            .hederContents li{
                margin-right:15px;
                cursor:pointer;
            }
        `}
        </style>
        </div>
        </Container>
    )
}
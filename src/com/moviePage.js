import React, { useState,useEffect } from "react";
import axios from "axios";
import { Container, Nav, Card, Button, InputGroup, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronRight, ChevronLeft, ChevronUp, Search } from 'react-bootstrap-icons';

function Heder({ setSearchMovie, setLgModal, cklogin, setCklogin }){
    const [input,setInput] = useState('');
    const SearchMovie = e => setInput(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        setSearchMovie(input)
    }
    return(
        <div className="contentDiv">
            <div className="hederContents">
                <h1><a>시집이</a></h1>
                <ul>
                    {cklogin == false ? <li onClick={()=>setLgModal(true)}>로그인</li> : <li onClick={()=>setCklogin(false)}> 로그아웃 </li> } <li>회원가입</li>
                </ul>
            </div>
            <hr/>
            <Nav className="my-2">
                <li className="movie_li">영화</li><li className="movie_li">극장</li><li className="movie_li">예매</li><li className="movie_li">스토어</li><li className="movie_li">이벤트</li>
                <div style={{top:"85px",position:"absolute", right:"0px"}}>
                <Form onSubmit={onSubmit}>
                    <InputGroup size="sm">
                        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={input} onChange={SearchMovie}/>
                        <InputGroup.Text id="inputGroup-sizing-sm" onClick={onSubmit} style={{cursor:"pointer"}}><Search/></InputGroup.Text>
                    </InputGroup>
                </Form>
                </div>
            </Nav>
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
                   <Card.Text> 개봉일:{movie.openDt} </Card.Text>
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

function Login({ lgModal, setLgModal, setCklogin, member }){

    const [loginInputs,setLoginInputs] = useState({
        id: '',
        password: ''
      });
    const { id, password } = loginInputs;
    const loginOnChange = e => {
        const {name, value} = e.target;
        setLoginInputs({
          ...loginInputs,
          [name]:value
        });
      }
        
    const findMember = (info) => {
        if(info.find((item) => item.id === id && item.password === password)){
            setCklogin(true)
        }
    }

    const loginOnSubmit = () => {
        findMember(member);
        setLoginInputs({
          id: '',
          password: ''
        });
        setLgModal(false);
    }

    

    return(
        <Modal size="lg" show={lgModal} onHide={() => setLgModal(false)}>
        <Modal.Header closeButton/>
        <Modal.Body >
            <div>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link style={{color:"white",background:"#fb4357"}}>로그인</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled> 비회원 예매 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link disabled> 비회원 예매확인 </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="my-4">
                    <span>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</span>
                    <Form className="w-50" style={{float:"none", margin:"auto", marginTop:"15px"}}>
                        <Form.Group required controlId="formBasicEmail">
                            <Form.Control type="text" autoFocus placeholder="ID 를 입력하세요" required name="id" value={id} onChange={loginOnChange}/>
                            <Form.Control type="text" placeholder="PASSWORD 를 입력하세요" required className="my-1" name="password" value={password} onChange={loginOnChange}/>
                        </Form.Group>
                        <Button variant="none" className="mt-2 w-100" onClick={loginOnSubmit} style={{color:"white", background:"#fb4357"}}> 로그인 </Button>
                        <div id="findInfo"> <a>비밀번호 찾기</a> <a>아이디 찾기</a> </div>
                    </Form>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default function MoviePage({ member }){
    // ----------------------------------------------------- 영화목록 불러오기 ------------------------------------------------------------
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
    // ----------------------------------------------------- 영화목록 불러오기 ------------------------------------------------------------

    // ----------------------------------------------------- 영화목록 페이지네이션 ------------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
    };
    // ----------------------------------------------------- 영화목록 페이지네이션 ------------------------------------------------------------
    
    // ----------------------------------------------------- 영화제목 필터 ------------------------------------------------------------
    const [searchMovie,setSearchMovie] = useState(''); 

    const search = (movie) => {
        return movie.filter((item) =>
            item.movieNm.includes(searchMovie)
        );
    }
    // ----------------------------------------------------- 영화제목 필터 ------------------------------------------------------------
   
    // ----------------------------------------------------- 로그인 ------------------------------------------------------------
    const [lgModal,setLgModal] = useState(false);
    const [cklogin,setCklogin] = useState(false);
    // ----------------------------------------------------- 로그인 ------------------------------------------------------------
    
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러</div>;
    if(!movie) return null;

    return(
        <Container>
        <div style={{position:"relative", width:"100%", minWidth:"1280px"}}>
            <Heder searchMovie={searchMovie} setSearchMovie={setSearchMovie} setLgModal={setLgModal} cklogin={cklogin} setCklogin={setCklogin}/>
            <Movie movies={search(currentPosts(movie))} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Login lgModal={lgModal} setLgModal={setLgModal} setCklogin={setCklogin} member={member}/>
            <style>
            {`
                .movie_li{
                    display:block;
                    float: left;
                    padding-left:40px;
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
                }
                .hederContents li{
                    margin-right:40px;
                    cursor:pointer;
                }

                #findInfo a{
                    text-decoration:underline;
                    margin:15px;
                    float:right;
                }
            `}
            </style>
        </div>
        </Container>
    )
}
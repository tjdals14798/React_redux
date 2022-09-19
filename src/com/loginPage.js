import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table, Toast, ToastContainer, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginTost({cklogin ,onLogOut, userName, setLoginModal, setChangeModal }){
  return(
    <>
    {!cklogin &&
      <ToastContainer className="p-3" position="top-end">
        <Toast>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Bootstrap</strong>
            <small>^ _ ^</small>
          </Toast.Header>
          <Toast.Body>
            로그인을 해주세요
            <hr/>
            <Button variant="outline-secondary" size="sm" onClick={()=>setLoginModal(true)}>로그인</Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    }
    {cklogin &&
       <ToastContainer className="p-3" position="top-end">
      <Toast>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Bootstrap</strong>
          <small>^ _ ^</small>
        </Toast.Header>
        <Toast.Body>
          {userName} 님 환영합니다!!<hr/>
          <Button variant="outline-secondary" size="sm" onClick={()=>setChangeModal(true)}>정보변경</Button>
          <Button variant="outline-secondary" size="sm" onClick={onLogOut}>로그아웃</Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  }
  </>
  )
}

function LoginModal({ onSearch, loginModal, setLoginModal }){
  const [Inputs,setInputs] = useState({
    id: '',
    password: ''
  });
  const { id, password } = Inputs;
  const loginOnChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...Inputs,
      [name]:value
    });
  }
    
  const loginOnSubmit = () => {
    onSearch(Inputs);
    setInputs({
      id: '',
      password: ''
    });
    setLoginModal(false);
  }

  return(
    <>
    <Modal size="lg" centered show={loginModal}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          로그인
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
              <Form.Group required controlId="formBasicEmail">
                <Form.Control type="text" autoFocus placeholder="ID 를 입력하세요" required name="id" value={id} onChange={loginOnChange}/>
                <Form.Control type="text" placeholder="PASSWORD 를 입력하세요" required className="my-1" name="password" value={password} onChange={loginOnChange}/>
              </Form.Group>
              <Button variant="secondary" className="mt-2 w-100" onClick={loginOnSubmit}> 로그인 </Button>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setLoginModal(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

function ChangeInfoModal({ changeModal, setChangeModal, onNChange, userName, cklogin }){
  const [username,setUserName] = useState('');
  useEffect(()=>{ setUserName(userName) },[cklogin])
  const [ChangeNick,setChangeNick] = useState(''); 
  const Nickchange = e => (setChangeNick(e.target.value));

  const NickSubmit = () => {
    onNChange({username,ChangeNick});
    setChangeNick('');
    setChangeModal(false);
  }
  return(
    <>
      <Modal size="lg" centered show={changeModal}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          닉네임 변경
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group required controlId="formBasicEmail">
              <Form.Control type="text" placeholder="NICKNAME 를 입력하세요" required className="my-1" value={ChangeNick} onChange={Nickchange}/>
            </Form.Group>
            <Button variant="secondary" className="mt-2 w-100" onClick={NickSubmit}> 변경 </Button>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{setChangeModal(false)}}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

const PostItem = React.memo(function TodoItem({ post, setModalShow, value, setIndex }) {

  const onModal = () => {
    setIndex(value)
    setModalShow(true)
  }

  return (
    <>
      <td style={{width:"100px"}}>{post.key+1}</td>
      <td style={{width:"300px"}} >{post.id}</td>
      <td><Button variant="link" size="sm" className="w-100" index={value} onClick={onModal} style={{textDecoration:"none", color:"white"}}> {post.postname} </Button></td>
    </>
  );
});

const PostList = React.memo(function TodoList({ posts, setModalShow, setIndex }) {
  return (
    <>
      {posts.map(post => (
        <tr key={post.key} >
            <PostItem post={post} setModalShow={setModalShow} setIndex={setIndex} value={post.key}/>
        </tr>
      ))}
    </>
  );
});

function PostModal({ post, show, setModalShow, postIndex }){
  return(
  <Modal size="lg" centered show={show}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {post[postIndex].postname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> {post[postIndex].postcontent} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
  )
}

function PostingModal({ show, setPostModal, userName, cklogin, onPosting }){
  const [username,setUserName] = useState('');
  useEffect(()=>{ setUserName(userName); },[cklogin])
  const [postInputs,setPostInputs] = useState({
    postname: "",
    postcontent: ""
  });
  const { postname,postcontent } = postInputs;

  const onChange = (e) =>{
    const {value, name} = e.target;
    setPostInputs({
        ...postInputs,
        [name]: value
    });
  }

  const onSubmit = () =>{
    onPosting({username,postInputs});
    setPostInputs({
      postname: "",
      postcontent: ""
    });
    setPostModal(false);
  }

  return(
  <Modal size="lg" centered show={show}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          글쓰기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group required controlId="formBasicEmail">
            <Form.Control type="text" name="postname" value={postname} onChange={onChange} autoFocus placeholder="글 제목을 입력하세요" />
            <Form.Control as="textarea" name="postcontent" value={postcontent} onChange={onChange} aria-label="With textarea" className="my-1" placeholder="글 내용을 입력하세요"/>
          </Form.Group>
          <Button variant="secondary" onClick={onSubmit} className="mt-2 w-100"> 글쓰기 </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setPostModal(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
  )
}

function PostPagination ({ currentPage, length, setCurrentPage }){

  let items = [];
  for (let number = 1; number <= length ; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={()=>setCurrentPage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination style={{justifyContent:"center", marginLeft:"-25.8%"}}>{items}</Pagination>
  
}

function PostPage({ post, postIndex, setIndex, cklogin, userName, onPosting }){
  const [modalShow,setModalShow] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
    return(
      <>
      <Container>
      <Table striped bordered hover variant="dark" className="mt-4 w-75">
          <thead>
            <tr>
              <th colSpan={3}>게시판</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>#</th><th>작성자</th><th>글 제목</th></tr>
            <PostList posts={currentPosts(post)} setModalShow={setModalShow} setIndex={setIndex} cklogin={cklogin}/>  
            {cklogin && <tr><td colSpan={3}><Button size="sm" variant="outline-light" onClick={()=>setPostModal(true)} > 글쓰기 </Button></td></tr>}
          </tbody>
        </Table>
        <PostModal show={modalShow} post={post} postIndex={postIndex} setModalShow={setModalShow}/>
        <PostingModal show={postModal} setPostModal={setPostModal} userName={userName} cklogin={cklogin} onPosting={onPosting}/>
        <PostPagination currentPage={currentPage} length={Math.ceil(post.length/10)} setCurrentPage={setCurrentPage}/>
      </Container>

      <style type="text/css">
      {`
      .page-link {
        color: #000; 
        background-color: #fff;
        border: 1px solid #ccc; 
      }   
      .page-item.active .page-link {
        z-index: 1;
        color: #555;
        font-weight:bold;
        background-color: #f1f1f1;
        border-color: #ccc;
      }  
      .page-link:focus, .page-link:hover {
        color: #000;
        background-color: #fafafa; 
        border-color: #ccc;
      `}
      </style>

      </>
    )
}

function Loginpage ({ onSearch, cklogin, userName, onLogOut, onNChange, post, postIndex, setIndex, onPosting }){
  const [loginModal,setLoginModal] = useState(false);
  const [changeModal,setChangeModal] = useState(false);

    return(
      <>
        <Container>
          <LoginTost loginModal={loginModal} setLoginModal={setLoginModal} setChangeModal={setChangeModal} onLogOut={onLogOut} userName={userName} cklogin={cklogin}/>
          <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} onSearch={onSearch} cklogin={cklogin}/>
          <ChangeInfoModal changeModal={changeModal} setChangeModal={setChangeModal} userName={userName} onNChange={onNChange} cklogin={cklogin}/>
          <PostPage post={post} postIndex={postIndex} setIndex={setIndex} cklogin={cklogin} onPosting={onPosting} userName={userName}/>
        </Container>
      </>
    )
}

export default Loginpage;
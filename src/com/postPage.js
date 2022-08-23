import React, { useState } from "react";
import { Button, Container, Form, Modal, Table, Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostItem = React.memo(function TodoItem({ post, setModalShow, value, setIndex }) {

  const onModal = () => {
    setIndex(value)
    setModalShow(true)
  }

  return (
    <>
      <td>{post.key}</td>
      <td>{post.id}</td>
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
          {post[postIndex].key} 번 게시글
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> {post[postIndex].postname} </h4>
        <p> {post[postIndex].postcontent} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
  )
}

function PostingModal({ show, setPostModal }){
  const [postInputs,setPostInputs] = useState({
    id: "",
    postname: "",
    postcontent: ""
  });

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
            <Form.Control type="text" autoFocus placeholder="글 제목을 입력하세요" />
            <Form.Control as="textarea" aria-label="With textarea" className="my-1" placeholder="글 내용을 입력하세요"/>
          </Form.Group>
          <Button variant="secondary" className="mt-2 w-100"> 글쓰기 </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setPostModal(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
  )
}

function PostPage({ post, postIndex, setIndex }){
  const [modalShow,setModalShow] = useState(false);
  const [postModal, setPostModal] = useState(false);
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
            <PostList posts={post} setModalShow={setModalShow} setIndex={setIndex}/>  
            <tr><td colSpan={3}><Button size="sm" variant="outline-light" onClick={()=>setPostModal(true)} > 글쓰기 </Button></td></tr>
          </tbody>
        </Table>
        <PostModal show={modalShow} post={post} postIndex={postIndex} setModalShow={setModalShow}/>
        <PostingModal show={postModal} setPostModal={setPostModal}/>
      </Container>
      </>
    )
}

export default PostPage;
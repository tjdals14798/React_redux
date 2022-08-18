import React, { useState } from "react";
import { Button, Container, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostItem = React.memo(function TodoItem({ post, setModalShow, setKey, value }) {
  const onModal = () =>{
    setKey((prevState)=>({...prevState,value}))
    setModalShow(true)
  }
  return (
    <>
      <td>{post.id}</td>
      <td><Button variant="none" size="sm" className="w-100" onClick={onModal}> {post.postname} </Button></td>
    </>
  );
});

const PostList = React.memo(function TodoList({ posts, setModalShow, setKey }) {
  return (
    <>
      {posts.map(post => (
        <tr key={post.key} >
            <PostItem post={post} setModalShow={setModalShow} setKey={setKey} value={post.key}/>
        </tr>
      ))}
    </>
  );
});

function PostModal({ post, show, setModalShow, key }){
  return(
  <Modal size="lg" centered show={show}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {post[key]} 번 게시글
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{post.postname}</h4>
        <p>
          {post.postcontent}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
  )
}

function PostPage({ post }){
  const [modalShow,setModalShow] = useState(false);
  const [key,setKey] = useState();

    return(
      <>
      <Container>
      <Table striped bordered hover variant="dark" className="mt-4 w-75">
          <thead>
            <tr>
              <th colSpan={2}>게시판</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>작성자</th><th>글 제목</th></tr>
            <PostList posts={post} setModalShow={setModalShow} setKey={setKey}/>
          </tbody>
        </Table>
        <PostModal show={modalShow} post={post} setModalShow={setModalShow} key={key}/>
      </Container>
      </>
    )
}

export default PostPage;
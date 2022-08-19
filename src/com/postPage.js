import React, { useState } from "react";
import { Button, Container, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostItem = React.memo(function TodoItem({ post, setModalShow, value, setIndex }) {

  const onModal = () => {
    setIndex(value)
    setModalShow(true)
  }

  return (
    <>
      <td>{post.id}</td>
      <td><Button variant="none" size="sm" className="w-100" index={value} onClick={onModal}> {post.postname} </Button></td>
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
        <h4>{post[postIndex].postname}</h4>
        <p>
          {post[postIndex].postcontent}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow(false)}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
  )
}

function PostPage({ post, postIndex, setIndex }){
  const [modalShow,setModalShow] = useState(false);
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
            <PostList posts={post} setModalShow={setModalShow} setIndex={setIndex}/>
          </tbody>
        </Table>
        <PostModal show={modalShow} post={post} postIndex={postIndex} setModalShow={setModalShow}/>
      </Container>
      </>
    )
}

export default PostPage;
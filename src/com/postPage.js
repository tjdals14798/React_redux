import React from "react";
import { Button, Container, Form, Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostItem = React.memo(function TodoItem({ post }) {
  return (
    <>
      <td>{post.id}</td>
      <td>{post.postname}</td>
    </>
  );
});

const PostList = React.memo(function TodoList({ posts }) {
  return (
    <>
      {posts.map(post => (
        <tr key={post.id}>
            <PostItem post={post} />
        </tr>
      ))}
    </>
  );
});

function PostPage({ post }){
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
              <tr><th>번호</th><th>글 제목</th></tr>
              <PostList posts={post} />
            </tbody>
          </Table>
        </Container>
        </>
    )

}

export default PostPage;
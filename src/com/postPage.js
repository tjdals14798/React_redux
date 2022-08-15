import React from "react";
import { Button, Container, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostPage(){
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
              <tr>
                <td>내용 넣어야함
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        </>
    )

}

export default PostPage;
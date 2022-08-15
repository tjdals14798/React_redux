import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table, Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loginpage ({ onSearch, cklogin, userName, onLogOut, onNChange }){
    const [Inputs,setInputs] = useState({
        id: '',
        password: ''
    });
    const { id, password } = Inputs;
    
    const [changeInputs,setChangeInputs] = useState({
      changeid: '',
      changenickname: ''
    });
    const { changeid, changenickname } = changeInputs;

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
    }

    const NickonChange = e => {
      const {name, value} = e.target;
      setChangeInputs({
        ...changeInputs,
        [name]:value
      });
    }
  
    const NickonSubmit = () => {
      onNChange(changeInputs);
      setChangeInputs({
        changeid: '',
        changenickname: ''
      });
    }
    
    return(
        <>
        <Container>
        {!cklogin &&
          <Table striped bordered hover variant="dark" className="mt-4 w-75">
            <thead>
              <tr>
                <th colSpan={2}>로그인</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <Container fluid="xl">
                <Form>
                  <Form.Group required controlId="formBasicEmail">
                    <Form.Control type="text" autoFocus placeholder="ID 를 입력하세요" required name="id" value={id} onChange={loginOnChange}/>
                    <Form.Control type="text" autoFocus placeholder="PASSWORD 를 입력하세요" required className="my-1" name="password" value={password} onChange={loginOnChange}/>
                  </Form.Group>
                  <Button variant="secondary" className="mt-2 w-100" onClick={loginOnSubmit}> 로그인 </Button>
                </Form>
                </Container>
                </td>
              </tr>
            </tbody>
          </Table>
        }
        {cklogin &&
          <>
          <Table striped bordered hover variant="dark" className="mt-4 w-75">
            <thead>
              <tr>
                <th colSpan={2}>닉네임 변경</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <Container fluid="xl">
                <Form>
                  <Form.Group required controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="ID 를 입력하세요" name="changeid" value={changeid} onChange={NickonChange}/>
                    <Form.Control type="text" placeholder="NICKNAME 를 입력하세요" required className="my-1" name="changenickname" value={changenickname} onChange={NickonChange}/>
                  </Form.Group>
                  <Button variant="secondary" className="mt-2 w-100" onClick={NickonSubmit}> 변경 </Button>
                </Form>
                </Container>
                </td>
              </tr>
            </tbody>
          </Table>
          <ToastContainer className="p-3" position="top-end">
            <Toast>
              <Toast.Header closeButton={false}>
                <strong className="me-auto">Bootstrap</strong>
                <small>^ _ ^</small>
              </Toast.Header>
              <Toast.Body>
                {userName} 님 환영합니다!!<hr/>
                <Button variant="outline-secondary" size="sm" onClick={onLogOut}>로그아웃</Button>
              </Toast.Body>
            </Toast>
          </ToastContainer>
          </>
        }
        </Container>
        </>
    )
}

export default Loginpage;
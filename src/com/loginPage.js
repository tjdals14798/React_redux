import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table, Toast, ToastContainer } from 'react-bootstrap';
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
                <Form.Control type="text" autoFocus placeholder="PASSWORD 를 입력하세요" required className="my-1" name="password" value={password} onChange={loginOnChange}/>
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

function ChangeInfoModal({ changeModal, setChangeModal, onNChange, userName }){
  console.log(userName);
  const [changeInputs,setChangeInputs] = useState({
    changeid: '',
    changenickname: ''
  });
  const { changeid, changenickname } = changeInputs;

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
              <Form.Control type="text" placeholder="ID 를 입력하세요" name="changeid" value={changeid} onChange={NickonChange}/>
              <Form.Control type="text" placeholder="NICKNAME 를 입력하세요" required className="my-1" name="changenickname" value={changenickname} onChange={NickonChange}/>
            </Form.Group>
            <Button variant="secondary" className="mt-2 w-100" onClick={NickonSubmit}> 변경 </Button>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{setChangeModal(false)}}> 닫기 </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

function Loginpage ({ onSearch, cklogin, userName, onLogOut, onNChange }){
  const [loginModal,setLoginModal] = useState(false);
  const [changeModal,setChangeModal] = useState(false);

    return(
      <>
        <Container>
          <LoginTost loginModal={loginModal} setLoginModal={setLoginModal} setChangeModal={setChangeModal} onLogOut={onLogOut} userName={userName} cklogin={cklogin}/>
          <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} onSearch={onSearch} userName={userName} cklogin={cklogin}/>
          <ChangeInfoModal changeModal={changeModal} setChangeModal={setChangeModal} onNChange={onNChange}/>
        {/* {!cklogin &&
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
        } */}
        {/* {cklogin &&
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
          <LoginTost userName={userName} onLogOut={onLogOut} />
          </>
        } */}
        </Container>
      </>
    )
}

export default Loginpage;
import React, { useState } from "react";
import { Button, Container, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberList = React.memo(function TodoList({ member, onRemove }) {

    return (
      <>
        {member.map(mem => (
          <tr key={mem.id}>
            <td>{mem.id}</td>
            <td>{mem.nickname}</td>
            <td><Button size="sm" onClick={() => onRemove(mem.id)}> 삭제 </Button></td>
          </tr>
        ))}
      </>
    );
  });

export default function Member({ member, onCreate, onRemove, onNChange }){

  const [inputs,setInputs] = useState({
    id: '',
    password: '',
    nickname: ''
  });

  const [changeInputs,setChangeInputs] = useState({
    changeid: '',
    changenickname: ''
  });

  const { id, password, nickname } = inputs;
  const { changeid, changenickname } = changeInputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }

  const onSubmit = () => {
    onCreate(inputs);
    setInputs({
      id: '',
      password: '',
      nickname: ''
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
        <Container fluid="md">
        <Table striped bordered hover variant="dark" className="w-100">
            <thead> 
                <tr><th>회원 아이디</th><th>회원 닉네임</th><th></th></tr>
            </thead>
            <tbody>
                <MemberList member={member} onRemove={onRemove}/>
            </tbody>
        </Table>

        <Table striped bordered hover variant="dark" className="mt-4 w-100">
          <thead>
            <tr>
              <th colSpan={2}>추가</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <Container fluid="xl">
              <Form>
                <Form.Group required controlId="formBasicEmail">
                  <Form.Control type="text" autoFocus placeholder="ID 를 입력하세요" required name="id" value={id} onChange={onChange}/>
                  <Form.Control type="text" placeholder="PASSWORD 를 입력하세요" required className="my-1" name="password" value={password} onChange={onChange}/>
                  <Form.Control type="text" placeholder="NICKNAME 를 입력하세요" required className="my-1" name="nickname" value={nickname} onChange={onChange}/>
                </Form.Group>
                <Button variant="secondary" className="mt-2 w-100" onClick={onSubmit}> 회원 추가 </Button>
              </Form>
              </Container>
              </td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover variant="dark" className="mt-4 w-100">
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
                    <Form.Control type="text" placeholder="ID 를 입력하세요" required name="changeid" value={changeid} onChange={NickonChange}/>
                    <Form.Control type="text" placeholder="NICKNAME 를 입력하세요" required className="my-1" name="changenickname" value={changenickname} onChange={NickonChange}/>
                  </Form.Group>
                  <Button variant="secondary" className="mt-2 w-100" onClick={NickonSubmit}> 변경 </Button>
                </Form>
                </Container>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        </>
    );
}
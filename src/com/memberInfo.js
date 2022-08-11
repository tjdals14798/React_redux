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

export default function Member({ member, onCreate, onRemove, onSearch }){

  const [inputs,setInputs] = useState({
    id: '',
    password: '',
    nickname: ''
  });

  const { id, password, nickname } = inputs;

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
                  <Form.Control type="text" autoFocus placeholder="PASSWORD 를 입력하세요" required className="my-1" name="password" value={password} onChange={onChange}/>
                  <Form.Control type="text" autoFocus placeholder="NICKNAME 를 입력하세요" required className="my-1" name="nickname" value={nickname} onChange={onChange}/>
                </Form.Group>
                <Button variant="secondary" className="mt-2 w-100" onClick={onSubmit}> 회원 추가 </Button>
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
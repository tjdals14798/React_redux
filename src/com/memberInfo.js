import React from "react";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberList = React.memo(function TodoList({ member }) {
    return (
      <>
        {member.map(mem => (
          <tr key={mem.id}>
            <td>{mem.id}</td>
          </tr>
        ))}
      </>
    );
  });

export default function member({ member }){
    console.log(member);
    return(
        <>
        <Table striped bordered hover variant="dark" className="m-auto mt-4 w-75">
            <thead> 
                <tr><th>회원 목록</th></tr> 
            </thead>
            <tbody>
                <MemberList member={member}/>
            </tbody>
        </Table>
        </>
    );
}
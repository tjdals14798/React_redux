import React, { useState } from "react";
import { Button, Container, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemberModal({ memModal, setMemModal}){
    return(
        <>
        <Modal size="lg" centered show={memModal}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          {/* <Nav> */}
            {/* <img style={{margin:"30px", width:"18rem", height:"400px"}} src={shoping[shopingidx].itemImg}/> &nbsp;
            <Nav className="w-50">
                <Container className="m-5 justify-content-md-center">
                    <Table borderless className="mt-5">
                        <thead>
                            <tr>
                                <th>{shoping[shopingidx].itemName}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>가격</td>
                                <td>{shoping[shopingidx].itemMoney}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="outline-dark" className="w-100 mt-5">결제</Button>
                </Container>
            </Nav>
          </Nav> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setMemModal(false)}> 닫기 </Button>
        </Modal.Footer>
      </Modal>

    </>
    )
}

export default function MainPage({}){
    const [memModal,setMemModal] = useState(false);

    return(
        <>
        <Container>
            <Table striped hover bordered className="w-100" variant="dark">
                <thead> 
                    <tr><th colSpan={2}>코드정리</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{width:"20%"}}>회원목록</td>
                        <td><Button size="sm" variant="secondary" onClick={()=> setMemModal(true)}> 코드 보기 </Button></td>
                    </tr>
                </tbody>
            </Table>
            <MemberModal memModal={memModal} setMemModal={setMemModal}/>
        </Container>
        </>
    )
}
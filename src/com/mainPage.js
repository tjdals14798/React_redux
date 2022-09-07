import React, { useState } from "react";
import { Button, Carousel, Container, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemberModal({ memModal, setMemModal }){
    return(
        <>
        <Modal size="lg" centered show={memModal}>
        <Modal.Header><Modal.Title id="contained-modal-title-vcenter">회원목록</Modal.Title></Modal.Header>
        <Modal.Body>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" style={{ height:"400px" }} src={require("../codeimg/memIndex.png")} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{ height:"400px" }} src={require("../codeimg/memContainer.png")} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{ height:"400px" }} src={require("../codeimg/memCom1.png")} alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{ height:"400px" }} src={require("../codeimg/memCom2.png")} alt="Fourth slide"/>
                </Carousel.Item>
            </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setMemModal(false)}> 닫기 </Button>
        </Modal.Footer>
      </Modal>

    </>
    )
}

export default function MainPage(){
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
            <MemberModal memModal={memModal} setMemModal={setMemModal} />
        </Container>
        </>
    )
}
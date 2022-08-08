import React from "react";
import Member from "../containers/MemberContainer";
import { Nav, Tab, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function main(){
    return(
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col md={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <h1 style={{textAlign:"center"}}><Badge bg="dark">Redux</Badge></h1>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                회원목록
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              리덕스 연습하귀ㅣ이~
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <Member/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
}
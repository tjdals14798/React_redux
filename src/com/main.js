import React from "react";
import Member from "../containers/MemberContainer";
import Login from "../containers/LoginContainer";
import Shoping from "../containers/ShopingContainer";
import MainPage from "../containers/MainContainer";
import MoviePage from "../containers/MovieContainer";
import AxiosPage from "./axiosPage";
import { Nav, Tab, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(){
    return(
    <Tab.Container defaultActiveKey="first">
      <Row className="mt-3">
        <Col md={2}>
        <h1 style={{textAlign:"center"}}><Badge bg="dark">Redux</Badge></h1>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                메인
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                회원목록
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                게시판
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">
                쇼핑
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                Axios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Sixth">
                Movie
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={10}>
          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="first"> <MainPage/> </Tab.Pane>
            <Tab.Pane eventKey="second"> <Member/> </Tab.Pane>
            <Tab.Pane eventKey="third"> <Login/> </Tab.Pane>
            <Tab.Pane eventKey="fourth"> <Shoping/> </Tab.Pane>
            <Tab.Pane eventKey="fifth"> <AxiosPage/> </Tab.Pane>
            <Tab.Pane eventKey="Sixth"> <MoviePage/> </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
}
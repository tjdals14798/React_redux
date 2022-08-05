import './App.css';
import { Nav, Tab, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row>
        <Col md={2} className="justify-content-center">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <h1 style={{textAlign:"center"}}><Badge bg="dark">Redux</Badge></h1>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                Tab 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            안녕하세요
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  );
}

export default App;

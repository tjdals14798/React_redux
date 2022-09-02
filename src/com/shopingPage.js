import React, { useState } from "react";
import { Button, Container, Col, Card, Row, ToastContainer, Toast, Table, Badge, Modal, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartList = React.memo(function CartList({ cart, onRemove, Money, setMoney }){
    function SumMoney(a){
        return setMoney(Money-a);
    }
    return(
        <>
            {cart.map((cartitem) => (
                <tr key={cartitem.id}>
                    <td>{cartitem.itemName}</td>
                    <td>{cartitem.itemMoney}</td>
                    <td style={{cursor:'pointer'}} onClick={()=>{
                        onRemove(cartitem.id)
                        SumMoney(parseInt(cartitem.itemMoney))}}
                    > X </td>
                </tr>
            ))}
        </>
    )
});

function CartTost({ cart, onRemove, Money ,setMoney, setcartBuyModal, setinsertModal }){
    return(
      <>
        <ToastContainer className="p-3" position="top-end">
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className="me-auto">장바구니</strong>
              <small>^ _ ^</small>
            </Toast.Header>
            <Toast.Body>

            <Table striped hover bordered className="w-100">
                <thead> 
                    <tr><th></th><th>가격</th><th></th></tr>
                </thead>
                <tbody>
                    <CartList cart={cart} onRemove={onRemove} Money={Money} setMoney={setMoney}/>
                </tbody>
            </Table>
            <hr/>
            <h4><Badge pill bg="secondary">{Money}원</Badge> <Button size="sm" variant="outline-secondary" onClick={() => setcartBuyModal(true)}>구매</Button></h4>
            </Toast.Body>
        <Button variant="outline-secondary" className="w-75 mt-3" onClick={()=>setinsertModal(true)} style={{position: 'absolute', right: 0, marginRight: "45px"}}>상품 등록</Button>
          </Toast>
        </ToastContainer>
    </>
    )
  }

  function InsertModal({ insertModal, setinsertModal, onCreate }){
    
    const [inputInsert,setInputInsert] = useState({
        itemName:'',
        itemMoney:'',
        itemImg:''
    })

    const { itemName, itemMoney, itemImg } = inputInsert;
    const onChange = (e) =>{
        const { name, value } = e.target;
        setInputInsert({
            ...inputInsert,
            [name]:value
        });
    }

    const onSubmit = () =>{
        onCreate(inputInsert)
        setInputInsert({
            itemName:'',
            itemMoney:'',
            itemImg:''
        })
        setinsertModal(false)
    }

    return(
    <Modal size="lg" centered show={insertModal}>
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter"> 상품 등록 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group required controlId="formBasicEmail">
                    <Form.Control type="text" name="itemName" value={itemName} onChange={onChange} autopocuse placeholder="상품 이름을 입력하세요" />
                    <Form.Control type="text" className="my-2" name="itemMoney" value={itemMoney} onChange={onChange} placeholder="가격을 입력하세요"/>
                    <Form.Control type="text" name="itemImg" value={itemImg} onChange={onChange} placeholder="상품 사진을 등록하세요"/>
                </Form.Group>
                <Button variant="outline-secondary" className="w-50 mt-3" onClick={onSubmit}> 제품 등록 </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setinsertModal(false)}> 닫기 </Button>
        </Modal.Footer>
      </Modal>
    )
  }

const ShopingItem = React.memo(function ShopingItem({ item, onCart, Money ,setMoney, setShowModal, onItemIdx }){  

    function SumMoney(a){
        return setMoney(Money+a);
    }

    const onClickCart = () =>{
        onCart(item)
        SumMoney(parseInt(item.itemMoney))
    }

    const onClickBuy = () => {
        setShowModal(true)
        onItemIdx(item.id);
    }

    return (
        <Col className="mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.itemImg} height="300"/>
                <Card.Body>
                    <Card.Title> {item.itemName} </Card.Title>
                    <Card.Text> {item.itemMoney} 원 </Card.Text>
                    <Button variant="outline-secondary" onClick={onClickCart}>장바구니</Button>{' '}
                    <Button variant="outline-secondary" onClick={onClickBuy} >구매</Button>
                </Card.Body>
            </Card>
        </Col>
    );
});

const ShopingList = React.memo(function ShopingList({ shoping, onCart , Money, setMoney, setShowModal, onItemIdx }){    
    return(
        <Container className="mb-3">
            <Row xs={1} md={3} className="justify-content-md-center">
                {shoping.map((item) => (
                    <ShopingItem key={item.id} item={item} onCart={onCart} Money={Money} setMoney={setMoney} setShowModal={setShowModal} onItemIdx={onItemIdx}/>
                ))}
            </Row>
        </Container>
    )
});

function BuyModal({ showModal ,setShowModal, shopingidx, shoping }){
    return(
    <Modal size="lg" centered show={showModal}>
        <Modal.Header><h4><Badge bg="success">Hit</Badge></h4></Modal.Header>
        <Modal.Body>
          <Nav>
            <img style={{margin:"30px"}} src={shoping[shopingidx].itemImg}/> &nbsp;
            <Nav className="w-50">
                <Container className="m-5 justify-content-md-center">
                    <Table borderless>
                        <thead>
                            <tr>
                                <th colSpan="2">{shoping[shopingidx].itemName}</th>
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
          </Nav>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setShowModal(false)}> 닫기 </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  function CartBuyModal({ cartBuyModal, setcartBuyModal, cart, Money }){
    return(
    <Modal size="lg" centered show={cartBuyModal}>
        <Modal.Header>
            {cart.length !==0 && <Modal.Title id="contained-modal-title-vcenter">{cart[0].itemName} 외 {cart.length}종 </Modal.Title>}
            {cart.length ===0 && <Modal.Title id="contained-modal-title-vcenter">상품 없음</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Nav>
                <Container className="m-5 justify-content-md-center">
                <Table striped hover bordered className="w-100">
                    <thead> 
                        <tr><th></th><th>가격</th></tr>
                    </thead>
                    <tbody>
                        {cart.map((cartitem) => (
                            <tr key={cartitem.id}>
                                <td>{cartitem.itemName}</td>
                                <td>{cartitem.itemMoney}</td>
                            </tr>
                        ))}
                    </tbody>    
                </Table>
            <h2><Badge pill bg="secondary">{Money}원</Badge></h2>
            <Button variant="outline-dark" className="w-100 mt-2">결제</Button>
                </Container>
          </Nav>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setcartBuyModal(false)}> 닫기 </Button>
        </Modal.Footer>
      </Modal>
    )
  }

function ShopingPage ({ shoping, cart, onCart, onRemove, onItemIdx, shopingidx, onCreate }){
    const [Money,setMoney] = useState(0);
    const [showModal,setShowModal] = useState(false);
    const [cartBuyModal,setcartBuyModal] = useState(false);
    const [insertModal,setinsertModal] = useState(false);

    return(
        <>
        <Container className="m-0" >
            <ShopingList shoping={shoping} onCart={onCart} Money={Money} setMoney={setMoney} setShowModal={setShowModal} onItemIdx={onItemIdx}/>
            <CartTost cart={cart} onRemove={onRemove} Money={Money} setMoney={setMoney} setcartBuyModal={setcartBuyModal} setinsertModal={setinsertModal}/>
            <BuyModal shoping={shoping} showModal={showModal} setShowModal={setShowModal} shopingidx={shopingidx}/>
            <CartBuyModal cartBuyModal={cartBuyModal} setcartBuyModal={setcartBuyModal} cart={cart} Money={Money}/>
            <InsertModal insertModal={insertModal} setinsertModal={setinsertModal} onCreate={onCreate}/>
        </Container>
        </>
    )
}

export default ShopingPage;
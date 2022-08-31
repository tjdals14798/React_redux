import React, { useState } from "react";
import { Button, Container, Col, Card, Row, ToastContainer, Toast, Table, Badge, Modal } from 'react-bootstrap';
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

function CartTost({ cart, onRemove, Money ,setMoney }){
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
            <h4><Badge pill bg="secondary">{Money}원</Badge></h4>
            </Toast.Body>
          </Toast>
        </ToastContainer>
    </>
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
        <Container>
            <Row xs={1} md={3} className="justify-content-md-center">
                {shoping.map((item) => (
                    <ShopingItem key={item.id} item={item} onCart={onCart} Money={Money} setMoney={setMoney} setShowModal={setShowModal} onItemIdx={onItemIdx}/>
                ))}
            </Row>
        </Container>
    )
});

function BuyModal({ showModal ,setShowModal }){
    return(
    <Modal size="lg" centered show={showModal}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setShowModal(false)}> 닫기 </Button>
        </Modal.Footer>
      </Modal>
    )
  }

function ShopingPage ({ shoping, cart, onCart, onRemove, onItemIdx, shopingidx }){
    const [Money,setMoney] = useState(0);
    const [showModal,setShowModal] = useState(false);
    console.log(shopingidx)
    return(
        <>
        <Container className="m-0" >
            <ShopingList shoping={shoping} onCart={onCart} Money={Money} setMoney={setMoney} setShowModal={setShowModal} onItemIdx={onItemIdx}/>
            <CartTost cart={cart} onRemove={onRemove} Money={Money} setMoney={setMoney}/>
            <BuyModal showModal={showModal} setShowModal={setShowModal}/>
        </Container>
        </>
    )
}

export default ShopingPage;
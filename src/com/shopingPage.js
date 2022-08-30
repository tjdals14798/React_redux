import React, { useState } from "react";
import { Button, Container, Col, Card, Row, ToastContainer, Toast, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartList = React.memo(function CartList({ cart, onRemove }){    
    return(
        <>
            {cart.map((cartitem) => (
                <tr key={cartitem.id}>
                    <td>{cartitem.itemName}</td>
                    <td>{cartitem.itemMoney}</td>
                    <td style={{cursor:'pointer'}} onClick={() => onRemove(cartitem.id)}>X</td>
                </tr>
            ))}
        </>
    )
});

function CartTost({ cart, onRemove }){
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
                    <CartList cart={cart} onRemove={onRemove}/>
                </tbody>
            </Table>
            </Toast.Body>
          </Toast>
        </ToastContainer>
    </>
    )
  }

const ShopingItem = React.memo(function ShopingItem({ item, onCart }){
    return (
        <Col className="mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.itemImg} height="300"/>
                <Card.Body>
                    <Card.Title> {item.itemName} </Card.Title>
                    <Card.Text> {item.itemMoney} 원 </Card.Text>
                    <Button variant="outline-secondary" onClick={()=>onCart(item)}>장바구니</Button>{' '}
                    <Button variant="outline-secondary" >구매</Button>
                </Card.Body>
            </Card>
        </Col>
    );
});

const ShopingList = React.memo(function ShopingList({ shoping, onCart }){    
    return(
        <Container>
            <Row xs={1} md={3} className="justify-content-md-center">
                {shoping.map((item) => (
                    <ShopingItem key={item.id} item={item} onCart={onCart} />
                ))}
            </Row>
        </Container>
    )
});

function ShopingPage ({ shoping, cart, onCart, onRemove }){

    return(
        <>
        <Container className="m-0" >
            <ShopingList shoping={shoping} onCart={onCart}/>
            <CartTost cart={cart} onRemove={onRemove}/>
        </Container>
        </>
    )
}

export default ShopingPage;
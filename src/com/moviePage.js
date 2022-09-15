import React from "react";
import { Button, Container, Col, Card, Row, ToastContainer, Toast, Table, Badge, Modal, Nav, Form, CloseButton, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Heder(){
    return(
        <>
            <Navbar collapseOnSelect className="w-75" expand="lg" bg="dark">
                <Container>
                    <Navbar.Brand style={{cursor:'pointer',color:"white"}}>시집이</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">                     
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        <style>
        {`
            li{
                list-style:none;
            }

        `}
        </style>
        </>
    )
}

export default function MoviePage(){
    return(
        <>
            <Heder/>
        </>
    )
}
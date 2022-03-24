import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Routes ,Route,Link} from "react-router-dom";
import Quotes from "./components/Quotes"
import Memes from "./components/Memes"
import Password from "./components/Password"
import Main from "./Main"
import './styles/nav.css';
export default function mainNavBar() {
    return (
        <Router>
        <div>
            <Navbar bg="" variant="light" >
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>PLOT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/memes"}>Memes</Nav.Link>
                        <Nav.Link as={Link} to={"/quotes"}>Quotes</Nav.Link>
                        <Nav.Link as={Link} to={"/password"}>Password</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> 
        </div>
        <div> 
        <Routes >
        <Route path="/" element={<Main/>} />
        <Route exact path="/memes" element={<Memes/>} />
        <Route path="/quotes" element={<Quotes/>} />
        <Route path="/password" element={<Password/>} />
        </Routes >
        
        </div>
        </Router>
    )
}
    
import Container  from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

export default function NavBarVapor (){
    return (
        <Navbar  bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand >
                    <h2>James Taylor</h2>
                </Navbar.Brand>
            </Container>

            <Container  style={{ justifyContent:'flex-end' }}>
                <Row >
                    <Col>
                        <Button variant="outline-primary" >
                            Contact
                        </Button>{' '}
                    </Col>
                    <Col>
                        <Button variant="outline-primary">
                            Resume
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
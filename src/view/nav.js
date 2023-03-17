import { 
    Navbar,
    Nav, 
    Container,
    Row,
    Col 
} from 'react-bootstrap';
import logo from '../image/logo.png';
import '../Custom.css';

function NavigationBar(){
    return(
        <>
            <Navbar className='nav' sticky='top' variant='dark' id="navBar">
                <Container className='container-navbar'>
                    <Row className='row-nav' md={12}>
                        <Col className='col-nav'>
                            <Navbar.Brand href="/">
                                <img
                                    alt='Company Logo'
                                    src={logo}
                                    className='logo'
                                />{' '}
                                <p className='company-name'>My Company</p>
                            </Navbar.Brand>
                        </Col>
                        <Col className='col-nav-right'>
                            <Nav className='nav-item'>
                                <Nav.Link href="#" className='nav-list'>About Us</Nav.Link>
                                <Nav.Link href="#" className='nav-list'>Contact Us</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar> 
        </>
    )
}

export default NavigationBar
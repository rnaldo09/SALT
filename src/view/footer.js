import { 
    Container,
    Row,
    Col,
    Form
} from "react-bootstrap"
import {
    useReducer,
} from 'react';
import logo from '../image/logo.png';
import parse from 'html-react-parser';

function callBack(state, e){
    switch(e.target.value){
        case 'main': {
            return{
                site: e.target.value,
                address: parse(`Jln. Lembong No 10<br /> Kel. Braga Kec. Sumur<br />Bandung, Kota<br />Bandung, Jawa Barat`)
            }
        }
        case 'tech': {
            return{
                site: e.target.value,
                address: parse(`Jln. Lembong No 8<br /> Kel. Braga Kec. Sumur <br />Bandung, Kota <br />Bandung, Jawa Barat`)
            }
        }case 'storage': {
            return{
                site: e.target.value,
                address: parse(`Jln. Lembong No 9<br /> Kel. Braga Kec. Sumur <br />Bandung, Kota <br />Bandung, Jawa Barat`)
            }
        }default: {
            return null
        }
    }
}

function Footer() {
    const initialValue = {
        site: "tech",
        address: parse(`Jln. Lembong No 8<br /> Kel. Braga Kec. Sumur <br />Bandung, Kota <br />Bandung, Jawa Barat`)
    }
    
    const [state, setSite] = useReducer(callBack, initialValue);
    
    return (
        <>
            <footer className="footer" id="footer">
                <Container className="container-footer" fluid>
                    <Row className="row-footer">
                        <Col md={4} xs className="col-footer">
                            <img src={logo} className="logo-footer" alt="Company Logo" />
                        </Col>
                        <Col md={4} xs className="col-footer">
                            <ul className="ul-footer">
                                <li><a href="/#">About Us</a></li>
                                <li><a href="/#">Contact Us</a></li>
                            </ul>
                        </Col>
                        <Col md={4} xs className="col-address">
                            <Form.Select value={state.site} onChange={setSite}>
                                <option value="main">Main Office</option>
                                <option value="tech">Technology Department</option>
                                <option value="storage">Warehouse</option>
                            </Form.Select>
                            <p>
                                {state.address}
                            </p>      
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </footer>
        </>
    )
}

export default Footer
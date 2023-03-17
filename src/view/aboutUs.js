import NavigationBar from "./nav";
import Footer from "./footer";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import core from "../image/coreValues.png";
import car from "../image/car-loan.png";
import bike from "../image/car-repair.png";
import wrench from "../image/protection.png";
import exhaust from "../image/spring.png";
import insurace from "../image/car-insurance.png";
import drone from "../image/drone.png";
import fender from "../image/fender-bender.png";
import motor from "../image/motorbike.png";

function AboutUs() {
    return (
        <>
            <NavigationBar />
            <div id="content">
                <Container className="intro">
                    <Row>
                        <Col>
                            <h2>
                                Discover Your Wonder
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:6}}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a bibendum ipsum, ac euismod enim. Sed felis mi, hendrerit ut aliquet quis, vehicula eget purus. Sed pretium pulvinar dolor in blandit.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="hww">
                    <Row>
                        <Col md={{span:4}}>
                            <h3> Who we are</h3>
                            <h4>Technology Company</h4>
                            <h5>Proin nec est odio. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quis scelerisque arcu, non dapibus lectus.</h5>
                        </Col>
                        <Col md={{span:4}}>
                            <h3>What we do</h3>
                            <h4>Professional Brand Management</h4>
                            <h5>Proin nec est odio. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quis scelerisque arcu, non dapibus lectus.</h5>
                        </Col>
                        <Col md={{span:4}}>
                            <h3>How we do</h3>
                            <h4>Strategize, Design, Collaborate</h4>
                            <h5>Proin nec est odio. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quis scelerisque arcu, non dapibus lectus.</h5>
                        </Col>
                    </Row>
                </Container>
                <Container className="coreValues">
                    <Row>
                        <Col md={{span:6}} className="img-container">
                            <img src={core} alt="Core Values" />
                            <h2 className="h2Core">Core Values</h2>
                        </Col>
                        <Col md={{span:6}} className="text-container">
                            <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet arcu eget sapien gravida, sit amet ornare quam imperdiet.<br /> <br />Fusce congue elit eu tincidunt blandit.</label>
                            <ul>
                                <li><h5>Dedication</h5></li>
                                    <label>Mauris varius libero sed arcu facilisis, id fringilla enim dapibus. Vivamus id rhoncus orci. Nam in cursus justo. Morbi non arcu nunc. Pellentesque sodales sagittis lorem a suscipit.</label>
                                <li><h5>Intellectual Honesty</h5></li>
                                    <label>Mauris varius libero sed arcu facilisis, id fringilla enim dapibus. Vivamus id rhoncus orci. Nam in cursus justo. Morbi non arcu nunc. Pellentesque sodales sagittis lorem a suscipit.</label>
                                <li><h5>Curiosity</h5></li>
                                    <label>Mauris varius libero sed arcu facilisis, id fringilla enim dapibus. Vivamus id rhoncus orci. Nam in cursus justo. Morbi non arcu nunc. Pellentesque sodales sagittis lorem a suscipit.</label>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container className="speciality">
                    <h2>Our Speciality</h2>
                    <Row>
                        <Col md={{span:3}}>
                            <img src={car} alt="Car" />
                            <label>Speciality 1</label>
                        </Col>
                        <Col md={{span:3}}>
                            <img src={bike} alt="Bike" />
                            <label>Speciality 1</label>
                        </Col>
                        <Col md={{span:3}}>
                            <img src={wrench} alt="Wrench" />
                            <label>Speciality 1</label>
                        </Col>
                        <Col md={{span:3}}>
                            <img src={exhaust} alt="Exhaust" />
                            <label>Speciality 1</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:3}}>
                            <img src={insurace} alt="Insurance" />
                            <label>Speciality 1</label>
                        </Col>
                        <Col md={{span:3}}>
                            <img src={drone} alt="drone" />
                            <label>Speciality 1</label>
                        </Col>
                        <Col md={{span:3}}>
                            <img src={fender} alt="Fender" />
                            <label>Speciality 1</label>
                        </Col>
                        <Col md={{span:3}}>
                            <img src={motor} alt="Motor" />
                            <label>Speciality 1</label>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs
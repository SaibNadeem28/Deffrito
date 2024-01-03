import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTruck, FaMoneyBillAlt, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import '../styles/services.css';

const Services = () => {
    const services = [
        {
            title: "Fries",
            description: "Get your fires quickly.",
            // icon: <FaTruck />,
            image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1703330691~exp=1703331291~hmac=1103b77b96757d7bb3c266ce7791cf79daaf83172169988250993fad6cebde43", // Replace with your image URL
        },
        {
            title: "Fries",
            description: "Get your fires quickly.",
            // icon: <FaMoneyBillAlt />,
            image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1703330691~exp=1703331291~hmac=1103b77b96757d7bb3c266ce7791cf79daaf83172169988250993fad6cebde43", // Replace with your image URL
        },
        {
            title: "Fries",
            description: "Get your fires quickly.",
            // icon: <FaHeadset />,
            image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1703330691~exp=1703331291~hmac=1103b77b96757d7bb3c266ce7791cf79daaf83172169988250993fad6cebde43", // Replace with your image URL
        },
        {
            title: "Fries",
            description: "Get your fires quickly.",
            // icon: <FaShieldAlt />,
            image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?w=996&t=st=1703330691~exp=1703331291~hmac=1103b77b96757d7bb3c266ce7791cf79daaf83172169988250993fad6cebde43", // Replace with your image URL
        },
    ];

    return (
        <Container>
            <h2 className="text-center my-4" style={{fontWeight:'bold',color:'gray'}}>Our items</h2>
            <Row>
                {services.map((service, index) => (
                    <Col key={index} md={3} sm={6} className="text-center my-3">
                        <div className="service-item">
                            <img src={service.image} alt={service.title} className="service-image" style={{height:'200px',width:'200px'}} />
                            <h4>{service.title}</h4>
                            <div className="service-icon">{service.icon}</div>
                            <p>{service.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Services;

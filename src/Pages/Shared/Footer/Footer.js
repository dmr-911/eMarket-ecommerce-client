import { Col, Container, Row } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
// import { useState } from 'react';

const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhone} style={{color: 'tomato'}}/>;
    const message = <FontAwesomeIcon icon={faEnvelope} style={{color: 'tomato'}}/>;
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'tomato' }} />;
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
  };
    return (
      <>
        <Container fluid className="footer-text py-5">
          <Row xs={1} md={3}>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>Emarket</b>
              </div>
              <p className="">
                Step up with Emarket. Your step one step can make us bigger and make us feel proud. 
              </p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>CONTACT INFORMATION</b>
              </div>
              <p>
                Stay up to date with current shop guidelines for Bangladesh and
                abroad. Check the latest updates here.
              </p>
              <p>
                <span>{phone}</span>
                <span> +88 011111111</span>
              </p>
              <p>
                <span>{message} </span>
                <span> mizanur911@gmail.com</span>
              </p>
              <p>
                <span>{location} </span>
                <span> Dhaka 1100</span>
              </p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>RECENT POSTS</b>
              </div>
              <p className="mb-3">
                Life is a beautiful journey not a destination. Let's make that more easier and happier.
              </p>
              <p className="mb-3">Take only memories, leave only footprints</p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          className="mb-3"
        >
              <small>
                Copyright ©DMR 2021 Be9digital Market. All rights reserved.
              </small>

        </Container>
      </>
    );
};

export default Footer;
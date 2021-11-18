import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';


function HomeAccordion() {
    return(
      <Container>
        <Accordion className="mobile" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>First</Accordion.Header>
            <Accordion.Body>
              <div className="accordion-info">
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <img src="../images/tab/tab-1.jpg" alt="Old TV"/>
                <div className="share">
                  <p>SHARE</p>  
                  <img className="fb-icon" src="../icons/facebook_icon.svg" alt="facebook logo"/>
                  <img className="twitter-icon" src="../icons/twitter_bird_icon.svg" alt="twitter logo"/>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second</Accordion.Header>
            <Accordion.Body>
              <div className="accordion-info">
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <img src="../images/tab/tab-2.jpg" alt="Pictures on a wall"/>
                <div className="share">
                  <p>SHARE</p>  
                  <img className="fb-icon" src="../icons/facebook_icon.svg" alt="facebook logo"/>
                  <img className="twitter-icon" src="../icons/twitter_bird_icon.svg" alt="twitter logo"/>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third</Accordion.Header>
            <Accordion.Body>
              <div className="accordion-info">
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                <img src="../images/tab/tab-3.jpg" alt="A broken window"/>
                <div className="share">
                  <p>SHARE</p>  
                  <img className="fb-icon" src="../icons/facebook_icon.svg" alt="facebook logo"/>
                  <img className="twitter-icon" src="../icons/twitter_bird_icon.svg" alt="twitter logo"/>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    )
}

export default HomeAccordion 
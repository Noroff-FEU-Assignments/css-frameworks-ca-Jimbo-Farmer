import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

function HomeTabs() {
    return(
        <Container className="not-mobile">
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="first" title="First">
                    <div className="tabContainer">
                        <img src="../images/tab/tab-1.jpg" alt="Old TV"/>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    </div> 
                </Tab>
                <Tab eventKey="second" title="Second">
                    <div className="tabContainer">
                        <img src="../images/tab/tab-2.jpg" alt="Pictures on a wall"/>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    </div>
                </Tab>
                <Tab eventKey="third" title="Third">
                    <div className="tabContainer">
                        <img src="../images/tab/tab-3.jpg" alt="A broken window"/>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default HomeTabs 
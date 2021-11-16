import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function HomeTabs() {
    return(
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="first" title="First">
            
        </Tab>
        <Tab eventKey="second" title="Second">
            
        </Tab>
        <Tab eventKey="third" title="Third">
            
        </Tab>
        </Tabs>
    )
}

export default HomeTabs 
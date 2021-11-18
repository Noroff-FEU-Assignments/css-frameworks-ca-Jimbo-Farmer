import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

function HomeTabs() {
    return(
        <Container className="not-mobile tabs-container">
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                <Tab eventKey="first" title="First">
                    <div className="tab-container container-one">
                        <img className="tab-pictures" src="../images/tab/tab-1.jpg" alt="Old TV"/>
                        <div className="tab-info">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <div className="share">
                                <p>SHARE</p>  
                                <img className="fb-icon" src="../icons/facebook_icon.svg" alt="facebook logo"/>
                                <img className="twitter-icon" src="../icons/twitter_bird_icon.svg" alt="twitter logo"/>
                            </div>
                        </div>                    
                    </div> 
                </Tab>
                <Tab eventKey="second" title="Second">
                    <div className="tab-container">
                        <img className="tab-pictures" src="../images/tab/tab-2.jpg" alt="Pictures on a wall"/>
                        <div className="tab-info">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <div className="share">
                                <p>SHARE</p>  
                                <img className="fb-icon" src="../icons/facebook_icon.svg" alt="facebook logo"/>
                                <img className="twitter-icon" src="../icons/twitter_bird_icon.svg" alt="twitter logo"/>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="third" title="Third">
                    <div className="tab-container">
                        <img className="tab-pictures" src="../images/tab/tab-3.jpg" alt="A broken window"/>
                        <div className="tab-info">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            <div className="share">
                                <p>SHARE</p>  
                                <img className="fb-icon" src="../icons/facebook_icon.svg" alt="facebook logo"/>
                                <img className="twitter-icon" src="../icons/twitter_bird_icon.svg" alt="twitter logo"/>
                            </div>
                        </div>                    
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default HomeTabs 
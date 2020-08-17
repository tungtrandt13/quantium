import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div style={{ height: '75%' }}>
                <header className="bgimg-1 ttdisplay-container ttgrayscale-min" id="home">
                </header>
                <div className="ttcontainer" style={{ padding: '55px 16px' }} id="about">
                    <h3 className="ttcenter" style={{ 'fontSize': '28px', 'fontWeight': '600' }}>Surge Analytics</h3>
                    <p className="ttcenter ttlarge" style={{ padding: "50px" }}>Surge Analytics provide rapid prototyping and quality assurance software for energy
                    storage system manufacturers and consumers.

                    Our mission is to speed up the transition to renewable sources, by powering the innovations in energy storage
                        systems that are necessary for products powered by electricity.</p>
                    <br />
                    <div className="ttcenter">
                        <button className="ttbutton ttblack ttpadding-large">Register Interest</button>
                    </div>
                </div>
                <div className="ttcontainer" style={{ 'padding': '18px 16px' }} id="team">
                    <h3 className="ttcenter" style={{ 'fontWeight': '600' }}>TEAM</h3>
                    <p className="ttcenter ttlarge">Dedication, Team work and Commitment are what transfer dreams to reality.</p>
                    <div className="ttrow-padding ttgrayscale" style={{ 'marginTop': '64px', 'display': 'flex', 'justifyContent': 'center' }}>
                        <div className="ttcol l2 m6 ttmargin-bottom" style={{ position: "relative" }}>
                            <div className="ttcard">
                                <img src="./assets/img/0.jpg" alt="Ollie" style={{ 'width': '100%' }} />
                                <div className="ttcontainer">
                                        <h3>Ollie Graham</h3>
                                        <p className="ttopacity">CEO &amp; Founder</p>
                                        {/* <p style={{"marginBottom":"3rem"}}>Ollie brings 20 years of experience working in companies of all sizes ranging from startups to Fortune 500 companies. He has built full stack AI/ML algorithms for various health and security applications..</p>
                                    <p style={{ "position": "absolute", "width": "80%", "bottom": "0","marginBottom": "0" }}><button className="ttbutton ttlight-grey ttblock"><i className="fa fa-envelope"></i>Contact</button></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="ttcol l2 m6 ttmargin-bottom" style={{ position: "relative" }}>
                            <div className="ttcard">
                                <img src="./assets/img/1.jpg" alt="Vishvak" style={{ 'width': '100%' }} />
                                <div className="ttcontainer">
                                    <h3>Vishvak Kannan</h3>
                                    <p className="ttopacity">CTO &amp; Founder</p>
                                    {/* <p style={{"marginBottom":"3rem"}}>Vish has a PhD in Chemical Engineering from NUS as a part of CARES C4T project led by the University of Cambridge. He is a leading expert on integrating physical phenomena with machine learning and statistical techniques.</p>
                                    <p style={{ "position": "absolute", "width": "80%", "bottom": "0","marginBottom": "0" }}><button className="ttbutton ttlight-grey ttblock" ><i className="fa fa-envelope"></i> Contact</button></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="ttcol l2 m6 ttmargin-bottom" style={{ position: "relative" }}>
                            <div className="ttcard">
                                <img src="./assets/img/susan.jpg" alt="Suasti Lye" style={{ 'width': '100%' }} />
                                <div className="ttcontainer">
                                        <h3>Suasti Lye</h3>
                                        <p className="ttopacity">Digital Marketing & Project Associate</p>
                                        {/* <p style={{"marginBottom":"3rem"}}>Ollie brings 20 years of experience working in companies of all sizes ranging from startups to Fortune 500 companies. He has built full stack AI/ML algorithms for various health and security applications..</p>
                                    <p style={{ "position": "absolute", "width": "80%", "bottom": "0","marginBottom": "0" }}><button className="ttbutton ttlight-grey ttblock"><i className="fa fa-envelope"></i>Contact</button></p> */}
                                </div>
                            </div>
                        </div>
                        <div className="ttcol l2 m6 ttmargin-bottom" style={{ position: "relative" }}>
                            <div className="ttcard">
                                <img src="./assets/img/steven.jpg" alt="Weijie Poh" style={{ 'width': '100%' }} />
                                <div className="ttcontainer">
                                        <h3>Weijie Poh</h3>
                                        <p className="ttopacity">Driving Patient-Centric Technology Innovation</p>
                                        {/* <p style={{"marginBottom":"3rem"}}>Ollie brings 20 years of experience working in companies of all sizes ranging from startups to Fortune 500 companies. He has built full stack AI/ML algorithms for various health and security applications..</p>
                                    <p style={{ "position": "absolute", "width": "80%", "bottom": "0","marginBottom": "0" }}><button className="ttbutton ttlight-grey ttblock"><i className="fa fa-envelope"></i>Contact</button></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >

        );
    }
}
export default Contact;
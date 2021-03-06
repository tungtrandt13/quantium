import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="bg-dark qscover">
                <div className="h-100 d-flex flex-column justify-content-between text-center text-light">
                    <div className="container my-3">
                        <img className="mx-auto qslogo" src="./assets/img/logo_light.png" />
                    </div>
                    <div className="container p-3">
                        <h1 className="display-3 d-block">Solid-State Batteries That&nbsp;Work</h1>
                        <p className="my-3 qssubtitle">
                            We are redefining the frontier of battery technology
                        </p>
                        <p className="lead mt-4">
                            <Link to={'/meet-the-team'} className="btn btn-lg btn-outline-light"
                                role="button">Meet The Team</Link>
                        </p>
                    </div>
                    <div className="container-fluid qstranslucent py-2 text-muted">
                        <div className="container text-center">
                            <div className="row">
                                <Link to={'/meet-the-team'} className="col-md my-auto text-lg-right">
                                    Meet The Team
                                </Link>
                                <div className="col-md-auto my-auto">
                                    <a className="text-muted" href="mailto:info@quantumscape.com">Contact Us</a>
                                </div>
                                <div className="col-md my-auto text-lg-left">
                                    ©&nbsp;2020 QuantumScape Corporation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Home;

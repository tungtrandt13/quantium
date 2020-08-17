import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import Contact from '../Contact/Contact.jsx';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/meet-the-team" component={Contact} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
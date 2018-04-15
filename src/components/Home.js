import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import "../css/Home.css";
import $ from 'jquery';
import Page1 from "./Page1"
import Page2 from "./Page2"

class Home extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/" component={Page1}/>                  
                    <Route path={'/test'} component={Page2}/>
                </div>
            </Router>
        );
    }

}

export default Home;

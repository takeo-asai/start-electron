import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Sidebar from './sidebar';
import Stepper from './stepper';
import About from './about';
import Home from './home';
import styles from './style.css';

render(
    <Router>
        <MuiThemeProvider>
            <div className="root">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main">
                    <Link to="/about">About</Link>
                    <Link to="/">Home</Link>
                    <FloatingActionButton style={{ marginRight: 20, }}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Stepper />
                </div>
            </div>
        </MuiThemeProvider>
    </Router>,
    document.getElementById("app")
);

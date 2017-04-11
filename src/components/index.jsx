import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Sidebar from './sidebar';
import Stepper from './stepper';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

render(
    <Router>
        <MuiThemeProvider>
            <div>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Stepper />
                <FloatingActionButton style={{ marginRight: 20, }}>
                    <ContentAdd />
                </FloatingActionButton>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </MuiThemeProvider>
    </Router>,
    document.getElementById("app")
);

import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../store';
import Sidebar from './sidebar';
import Stepper from './stepper';
import About from './about';
import Home from './home';
import CreateApp from './CreateApp';
import styles from './style.css';

injectTapEventPlugin();

render(
    <Provider store={store()}>
        <Router>
            <MuiThemeProvider>
                <div className="root">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="main">
                        <Link to="/about">About</Link>
                        <Link to="/">Home</Link>
                        <Link to="/create-app">Create App</Link>
                        <FloatingActionButton style={{ marginRight: 20, }}>
                            <ContentAdd />
                        </FloatingActionButton>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/create-app" component={CreateApp} />
                        <Stepper />
                    </div>
                </div>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);

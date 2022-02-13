import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home'
import Alert from './Alert';
import About from './About';
import NotFound from './NotFound'
import UserDetails from './UserDetails';
import GithubState from '../context/githubState';
import Alertstate from '../context/alert/alertState';

/**
 * @author - tunCode
 */

const App = () => {

    return (
        <GithubState>
            <Alertstate>
                <BrowserRouter>
                    <NavBar />
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/user/:login" component={UserDetails} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Alertstate>
        </GithubState>
    )
}

export default App;
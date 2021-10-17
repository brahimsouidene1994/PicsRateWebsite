import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EmptyPage from './pages/EmptyPage';
import Footer from './layout/Footer';

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Acceuil} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route component={EmptyPage} />
            </Switch>
            <Footer/>
        </React.Fragment>
    )
}

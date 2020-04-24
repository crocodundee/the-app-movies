import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../header';
import TopButton from '../button-to-top';
import ModalInfo from '../modal-info'
import {HomePage, PlaylistPage} from '../pages';

import './app.css';


const App = () => {
    return (
        <Fragment>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/playlist" component={PlaylistPage} exact/>
                </Switch>
                <TopButton/>
            </div>
            <ModalInfo/>
        </Fragment>
    )
}


export default App;
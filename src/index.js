import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TMDbService from './services/tmdb-service';
import { TMDBServiceProvider } from "./components/tmdb-service-context";
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import store from './store';

const tmdbService = new TMDbService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <TMDBServiceProvider value={tmdbService}>
                <Router>
                    <App/>
                </Router>
            </TMDBServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);
import React from 'react';
import { TMDBServiceConsumer } from "../tmdb-service-context";


const withTMDbService = () => (Wrapped) => {
    return (props) => {
        return (
            <TMDBServiceConsumer>
                {
                    (tmdbService) => {
                        return (<Wrapped {...props} tmdbService={tmdbService}/>);
                    }
                }
            </TMDBServiceConsumer>
        )
    }
}

export default withTMDbService;
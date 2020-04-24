import React from 'react';

const {
    Provider: TMDBServiceProvider,
    Consumer: TMDBServiceConsumer
} = React.createContext();


export {
    TMDBServiceConsumer,
    TMDBServiceProvider
}
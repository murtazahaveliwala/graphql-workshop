import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: 'http://localhost:8080/graphql' });

ReactDOM.render(<Routes client={client} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

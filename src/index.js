import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Header from './components/Header';
import App from './components/App';

// Init store
const store = configureStore();
window.store = store; // for debugging purpose

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <Provider store={store}>  
        <Header />    
        <App />
    </Provider>  
    </React.StrictMode>
);
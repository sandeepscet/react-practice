import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';

// Init store
const store = configureStore();


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>      
        <App />
    </Provider>  
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import StoreServiceContext from './components/StoreServiceContext'
import ShoesService from './services/shoesService'
import './index.css';
import App from './components/App';

const shoesService = new ShoesService()

ReactDOM.render(
  <React.StrictMode>
    <StoreServiceContext.Provider value={shoesService}>
      <Router>
        <App />
      </Router>
    </StoreServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



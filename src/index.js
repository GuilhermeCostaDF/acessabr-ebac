import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city="São Paulo" state="SP" />
      <Home />
    </div>
  </div>
  ,
  document.getElementById('root')
);


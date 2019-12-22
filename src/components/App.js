import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './LandingPage/MainPage';
import MoviesList from './Movies/MoviesList';
import ShowsList from './Shows/ShowsList';
import Reservation from './Reservation/Reservation';
import Header from './Header';

import '../styles/main.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/movies" exact component={MoviesList} />
          <Route path="/shows" exact component={ShowsList} />
          <Route path="/res" exact component={Reservation} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

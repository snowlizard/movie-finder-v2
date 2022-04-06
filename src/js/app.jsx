import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/movieSearchContainer';
import MovieDetailContainer from './containers/movieDetailContainer';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={MovieSearchContainer} />
        <Route path='movie/:id' component={MovieDetailContainer} />
      </HashRouter>
    );
  }
}

import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MovieSearchContainer from './containers/movieSearchContainer';
import MovieDetailContainer from './containers/movieDetailContainer';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MovieSearchContainer} />
          <Route path='/movie/:id' render={ (props) => <MovieDetailContainer {...props} />} />
        </Switch>
      </HashRouter>
    );
  }
}

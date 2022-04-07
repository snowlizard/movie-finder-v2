/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888/';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have an input for searching movies by title', () => {
    nightmare
      .goto(url)
      .evaluate( () => document.querySelector('input'))
      .end()
      .then( element => {
        expect(element).to.exist;
        expect(element.id).to.equal('movieTitle')
      })
  })

  it('have an app title', () => {
    nightmare
      .goto(url)
      .evaluate( () => document.querySelector('h2'))
      .end()
      .then( element => {
        expect(element).to.exist;
      })
  })

  it('should have a button to show results', () => {
    nightmare
      .goto(url)
      .evaluate( () => document.querySelector('button'))
      .end()
      .then( element => {
        expect(element).to.exist;
      })
  })

  it('should has a movie title', () => {
    nightmare
      .goto(url+"/movie/tt2705436")
      .evaluate( () => document.querySelector('h4'))
      .end()
      .then( element => {
        expect(element).to.exist;
        expect(element.innerHTML).to.equal('Italian Spiderman');
      })
  })

  it('should have badges with year, duration, and genre', () => {
    nightmare
      .goto(url+"/movie/tt2705436")
      .evaluate( () => document.getElementsByClassName('badges'))
      .end()
      .then( element => {
        expect(element).to.exist;
        expect(element.innerHTML).to.equal('Released: 2007 40min Short, Action, Comedy')
      })
  });

  it('should display movie poster', () => {
    nightmare
      .goto(url+"/movie/tt2705436")
      .evaluate( () => document.querySelector('img'))
      .end()
      .then( element => {
        expect(element).to.exist;
      })
  })

  it('should have a button to return to main site', () => {
    nightmare
      .goto(url+"/movie/tt2705436")
      .evaluate( () => document.querySelector('button'))
      .end()
      .then( element => {
        expect(element).to.exist;
      })
  })

  it('should have movie info', () => {
    nightmare
      .goto(url+"/movie/tt2705436")
      .evaluate( () => document.getElementsByClassName('misc-info'))
      .end()
      .then( element => {
        expect(element).to.exist;
      })
  })

  it('should have a header for movie details', () => {
    nightmare
      .goto(url+"/movie/tt2705436")
      .evaluate( () => document.getElementsByClassName('movie-details'))
      .end()
      .then( element => {
        expect(element).to.exist;
      })
  })

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

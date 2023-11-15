import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
        <Route
            path="/"
            exact
            element={<News key="general" pageSize={13} country="in" category="general" />}
          />
          <Route
            path="/business"
            exact
            element={<News key="business" pageSize={13} country="in" category="business" />}
          />
          <Route
            path="/entertainment"
            exact
            element={<News key="entertainment" pageSize={13} country="in" category="entertainment" />}
          />
          <Route
            path="/general"
            exact
            element={<News key="general" pageSize={13} country="in" category="general" />}
          />
          <Route
            path="/health"
            exact
            element={<News key="health" pageSize={13} country="in" category="health" />}
          />
          <Route
            path="/science"
            exact
            element={<News key="science" pageSize={13} country="in" category="science" />}
          />
          <Route
            path="/sports"
            exact
            element={<News key="sports" pageSize={13} country="in" category="sports" />}
          />
          <Route
            path="/technology"
            exact
            element={<News key="technology" pageSize={13} country="in" category="technology" />}
          />
        </Routes>
        <Footer/>
      </>
    );
  }
}

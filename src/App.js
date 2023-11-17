import './App.css';

import React, { useState } from 'react';
import Navbar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';


const App = () =>  {
  const pageSize = 6;
  const country = "in";
  // const apiKey = process.env.REACT_APP_NEWS_API

  const[progress, setProgress] = useState(0)


    return (
      <div>
        <Navbar fixed="top" />
        <LoadingBar
        color='#ba18aa'
        progress={progress}
      />
        <Routes>
        <Route
            path="/"
            exact
            element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" />}
          />
          <Route
            path="/business"
            exact
            element={<News setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" />}
          />
          <Route
            path="/entertainment"
            exact
            element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}
          />
          <Route
            path="/health"
            exact
            element={<News setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" />}
          />
          <Route
            path="/science"
            exact
            element={<News setProgress={setProgress} key="science" pageSize={13} country={country} category="science" />}
          />
          <Route
            path="/sports"
            exact
            element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" />}
          />
          <Route
            path="/technology"
            exact
            element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" />}
          />
        </Routes>
        <Footer/>
      </div>
    );
}

export default App;

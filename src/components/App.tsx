import About from 'pages/About';
import ErrorPage from 'pages/ErrorPage';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout title="Home" component={<Home />} />} />
          <Route path="/about" element={<Layout title="About us" component={<About />} />} />
          <Route path="*" element={<Layout title="Page not found" component={<ErrorPage />} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

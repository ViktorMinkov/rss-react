import About from 'pages/About';
import ErrorPage from 'pages/ErrorPage';
import FormPage from 'pages/FormPage';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/forms" element={<FormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;

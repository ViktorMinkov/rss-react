import About from 'pages/About';
import ErrorPage from 'pages/ErrorPage';
import FormPage from 'pages/FormPage';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import 'index.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout title="Home" component={<Home />} />} />
      <Route path="/about" element={<Layout title="About us" component={<About />} />} />
      <Route path="/forms" element={<Layout title="Form page" component={<FormPage />} />} />
      <Route path="*" element={<Layout title="Page not found" component={<ErrorPage />} />} />
    </Routes>
  );
};

export default App;

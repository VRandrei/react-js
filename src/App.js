import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about'>About</Link>
      </header>

      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/:id' element={<SingleProductPage/>} />
          <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

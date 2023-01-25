import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import AuthLayoutPage from './layouts/AuthLayoutPage';
import AuthProvider from './layouts/AuthProvider';

import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage';
import LoginPage from './pages/LoginPage';

import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<DefaultLayout/>}>
              <Route index element={<HomePage />} />
              <Route path='store' element={<StorePage />} />
              <Route path='about' element={
                <AuthLayout>
                  <AboutPage/>
                </AuthLayout>
              } />
              <Route path='store/:product/:id' element={<SingleProductPage/>} />
              <Route path='*' element={<NotFoundPage />} />
          </Route>
          <Route path='/' element={<AuthLayoutPage />}>
              <Route path='login' element={<LoginPage/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

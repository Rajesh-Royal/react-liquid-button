import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { Toaster } from 'sonner'
import { forceChakraDarkTheme } from './utils/utils';
import { toastStyles } from './utils/customTheme';

import Header from './components/navs/Header';
import Sidebar from './components/navs/Sidebar';

import LandingPage from './pages/LandingPage'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  useEffect(() => {
    forceChakraDarkTheme();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/:category/:subcategory" element={
          <main className='app-container'>
            <Header />

            <section className='category-wrapper'>
              <Sidebar />
              <CategoryPage />
            </section>

            <Toaster
              toastOptions={toastStyles}
              position='bottom-right'
              visibleToasts={1}
            />
          </main>
        } />
      </Routes>
    </Router>
  )
}
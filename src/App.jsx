import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import CategoryPage from './pages/CategoryPage'
import SearchResults from './pages/SearchResults'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ChangeTheme from './pages/ChangeTheme'
import ChangeLanguage from './pages/ChangeLanguage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/change-theme' element={<ChangeTheme />} />
          <Route path='/change-language' element={<ChangeLanguage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

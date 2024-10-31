import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import CategoryPage from './pages/CategoryPage'
import SearchResults from './pages/SearchResults'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import LanguageSelector from './pages/LanguageSelector'
import ArticleDetail from "./pages/ArticleDetail"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path="/articleDetails" element={<ArticleDetail />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/change-language' element={<LanguageSelector />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}
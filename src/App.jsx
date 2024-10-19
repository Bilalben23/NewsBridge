import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import CategoryPage from './pages/CategoryPage'
import SearchResults from './pages/SearchResults'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path='/search' element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import React, { useEffect } from 'react'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navigation, Footer, Home, About, Contact, Blog, Posts, Post } from './components'
import { useAnalytics } from 'use-analytics'

export default function App() {
  let location = useLocation()
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page()
  }, [location, analytics])

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

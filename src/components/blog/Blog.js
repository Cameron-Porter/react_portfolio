import React from 'react'
import { Outlet } from 'react-router-dom'

function Blog() {
  return (
    <div className="home mx-3">
      <div className="container">
        <h1 className="text-center mt-5">D.A.D. Chats</h1>
        <p className="dad text-center mb-5">(Dedicated & Devoted)</p>
        <Outlet />
      </div>
    </div>
  )
}

export default Blog

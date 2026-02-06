import React from 'react'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default App
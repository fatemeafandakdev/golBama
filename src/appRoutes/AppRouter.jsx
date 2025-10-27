import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../page/Home'
import ProductSortPage from '../page/ProductSortPage'

import Blog from '../page/Blog'
import Login from '../page/Login'
import Basket from '../page/Basket'
import ScrollToTop from '../feature/ScrollToTop'


function AppRouter() {
  return (
   
    <BrowserRouter basename="/golBama">
    <ScrollToTop/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/ProductSortPage/:sort' element={<ProductSortPage/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/basket' element={<Basket/>}/>
       
      </Routes>

    </BrowserRouter>
   
  )
}

export default AppRouter

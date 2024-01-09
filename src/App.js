import React from 'react'
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './components/Home'
import Exchanges from './components/Exchanges'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'

export default function App() {
  return (
    <Router>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
        <Route path='/coins' element={<Coins/>} />
        <Route path="/coin/:id" element={<CoinDetails />} />

      </Routes>

      <Footer/>
    </Router>
  )
}

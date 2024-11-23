import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AfterHome from './components/AfterHome/AfterHome'
import AnnoncePage from './components/Annonce/AnnoncePage'

const App = () => {
  return (
    <div>
        <Header></Header>
        <Home></Home>
        <AfterHome></AfterHome>
        <AnnoncePage></AnnoncePage>
    </div>
  )
}

export default App
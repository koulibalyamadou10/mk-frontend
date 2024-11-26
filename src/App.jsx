import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Solution from './components/Solution/Solution'
import AfterHome from './components/AfterHome/AfterHome'
import AnnoncePage from './components/Annonce/AnnoncePage'

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
        <Header></Header>
        <Home></Home>
        <Solution></Solution>
        {/*<AfterHome></AfterHome>*/}
        {/*<AnnoncePage></AnnoncePage>*/}
    </div>
  )
}

export default App
import React from 'react'
import KButton from '../utilities/KButton'
import './home.css'

const Home = () => {
    return <div style={{alignItems:'center', height:'600px'}} className='flex justify-around home'>
        <div className="left">
            <h1 className='text-lg'>
                Recevez gratuitement des<br/>
                devis de nos graphistes<br/>
                freelances
            </h1>
            <h3>Plus de 30 000 graphistes freelances en France</h3>
            <KButton></KButton>
        </div>

        <div className="logo">

        </div>
    </div>
}

export default Home
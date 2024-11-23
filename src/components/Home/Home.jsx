import React from 'react'
import KButton from '../utilities/KButton'
import KGap from '../utilities/KGap'
import './home.css'

const Home = () => {
    return <div style={{alignItems:'center', height:'600px'}} className='flex justify-around home'>
        <div className="left">
            <h1 className='text-4xl'>
                Recevez gratuitement des<br/>
                devis de nos graphistes<br/>
                freelances
            </h1>
            <br />
            <h3 className='text-xl'>Plus de 30 000 graphistes freelances en France</h3>
            <br />
            <KButton></KButton>
        </div>

        <div className="img">

        </div>
    </div>
}

export default Home
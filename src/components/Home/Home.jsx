import { useEffect } from 'react'
import './home.css'
import png_1 from "../../assets/pngs/png_1.png"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line} from "react-chartjs-2";
import KButtonSecondary from "../utilities/KButtonSecondary.jsx";

// Enregistrement des composants nécessaires
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const Home = () => {


    useEffect(()=>{
    }, [])

    return (
        <div className='home w-full h-[600px] relative'>
            <div className='w-full h-full flex justify-around items-center z-10'>

                <div className="left text-white">
                    <h1 className='text-3xl'>
                        Recevez gratuitement des<br />
                        devis de nos graphistes<br />
                        freelances
                    </h1>
                    <br />
                    <h3 className='text-xl'>Plus de 30 000 graphistes freelances en France</h3>
                    <br />
                    <KButtonSecondary></KButtonSecondary>
                </div>

                <div className="rigth">
                    <img src={png_1} className="w-full h-full" alt=""/>
                    {/*<div className="w-[300px] h-[600px] relative">*/}
                        {/*<svg width="300" height="500" viewBox="0 0 300 500" xmlns="">*/}
                        {/*    <rect x="10" y="10" rx="20" ry="20" width="280" height="480" stroke="black" fill="none"*/}
                        {/*          strokeWidth="4"/>*/}
                        {/*    <rect x="125" y="20" rx="10" ry="10" width="50" height="10" fill="black"/>*/}
                        {/*</svg>*/}
                        {/*<div className="w-[260px] h-[260px] absolute top-10 left-5">*/}
                            {/*<Bar data={*/}
                            {/*    {*/}
                            {/*        labels: ["", "", ""],*/}
                            {/*        datasets: [*/}
                            {/*            {*/}
                            {/*                label: "Link Analytics",*/}
                            {/*                data: [25, 26, 27]*/}
                            {/*            }*/}
                            {/*        ],*/}
                            {/*        backgroundColor: [*/}
                            {/*            "rgba(255, 10, 0, 0.8)",*/}
                            {/*            "rgba(255, 80, 0, 0.8)",*/}
                            {/*            "rgba(255, 240, 0, 0.8)"*/}
                            {/*        ]*/}
                            {/*    }*/}
                            {/*}></Bar>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Home
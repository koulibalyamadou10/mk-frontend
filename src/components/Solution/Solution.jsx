import Item from "./Item.jsx";
import png_2 from "../../assets/pngs/bng_2.png"
import './solution.css'

function Solution() {
    return (
        <div className='solution w-full h-[600px] relative bg'>
            <div className='w-full h-full flex justify-around items-center z-10'>

                <div className="left max-w-[450px]">
                    <h1 className='text-5xl text-[#00c2e3]'>Lorem ipsum,</h1>
                    <span>lorem ipsum is simply dymmy</span>
                    <h3 className='text-sm my-10'>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic</h3>
                    <div className="items my-5">
                        <Item text="Solutions pour les petites et grandes entreprises"></Item>
                        <Item text="Solutions pour les petites et grandes entreprises"></Item>
                        <Item text="Solutions pour les petites et grandes entreprises"></Item>
                    </div>

                    <button className="bg-[#00c2e3] py-3 px-3 rounded-3xl">
                        Desing Motivation. Toutes les fonctionnalité
                    </button>
                </div>

                <div className="rigth">
                    <img src={png_2} className="" alt=""/>
                </div>

            </div>
        </div>
        // <div className="solution grid grid-cols-2 items-center justify-center">
        //     <div className="left pl-14">
        //         <h1 className="my-10">
        //             <span className="text-5xl font-bold text-[#00c2e3]">Lorem ipsum,</span>
        //             <br/>
        //             <span>ipsum dolor sit</span>
        //         </h1>
        //         <div className="content">
        //             lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum.
        //             lorem ipsum dolor sit amet, lorem ipsum lorem ipsum.
        //             lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum.
        //             lorem ipsum dolor sit amet, lorem ipsum lorem ipsum.
        //             lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum.
        //             lorem ipsum dolor sit amet, lorem ipsum lorem ipsum.
        //             lorem ipsum dolor sit ametlorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum.
        //             lorem ipsum dolor sit amet, lorem ipsum lorem ipsum.
        //             lorem ipsum dolor sit amet
        //         </div>
        //         <div className="items">
        //             <Item text="Solutions pour les petites et grandes entreprises"></Item>
        //             <Item text="Solutions pour les petites et grandes entreprises"></Item>
        //             <Item text="Solutions pour les petites et grandes entreprises"></Item>
        //         </div>
        //         <div>
        //             <span>Desing Motivation - Toutes les fonctionnalités</span>
        //         </div>
        //     </div>
        //
        //     <div className="rigth">
        //         <img src={png_1} alt=""/>
        //     </div>
        // </div>
    );
}

export default Solution;

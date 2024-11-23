import React from 'react'

const Annonce = ({title, domaine, type, price, proposition, interaction, rapidity, hour, isNew, description, size}) => {
    return (
        <div>
            <div className='mt-16'></div>

            <div className="header flex justify-between items-center">
                <p className='flex gap-3 justify-center items-center'>
                    <span>{title}</span>
                    <span className='bg-gray-300 rounded-3xl border px-2 py-1 text-black font-medium'>{domaine}</span>
                </p>

                <div className='flex gap-7 justify-center items-center'>
                    <button className='bg-transparent border border-blue-500 text-blue-500 rounded-3xl py-1 px-5'>Nouveau</button>
                    <p>{hour} heures</p>
                </div>
            </div>

            <div className="mt-3">
                <p>
                    <span className="inline-block w-3 h-3 mr-2 rounded-full bg-green-700"></span>
                    <span> {price} </span>-
                    <span> {proposition} </span>-
                    <span> {interaction} </span>-
                    <span className='text-orange-400'> {rapidity} </span>
                </p>
            </div>

            <div>
                <p className='text-xl'>{description}</p>
            </div>

            <div className='mt-4'></div>

            <div className="flex items-center gap-10">
                <div class="flex -space-x-2 overflow-hidden">
                    <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>

                <div>
                    <p>{size}</p>
                </div>
            </div>
        </div>
    )
}

export default Annonce
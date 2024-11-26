import React from 'react'
import KButtonPrimary from '../utilities/KButtonPrimary.jsx'
import DM_02 from '../../assets/logos/DM-02.png'

const Header = () => {
	return <header className='flex justify-around items-center py-3 bg-[#00c2e3]'>
		<div className="left flex items-center gap-24">
			<div className="logo">
				<img width="70" height="70" className="object-cover" src={DM_02} alt="" />
			</div>

			<div className='flex gap-6'>
				<a className='text-sm hover:text-white' href="#">Annonces</a>
				<a className='text-sm hover:text-white' href="#">Réalisations</a>
				<a className='text-sm hover:text-white' href="#">Graphistes</a>
				<a className='text-sm hover:text-white' href="#">Aide</a>
				<a className='text-sm hover:text-white' href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
			</div>
		</div>

		<div className="rigth flex items-center gap-5">
			<a href='#' className='text-sm hover:text-white'>S'Inscrire</a>
			<a href='#' className='text-sm hover:text-white'>Se connecter</a>
			<KButtonPrimary></KButtonPrimary>
		</div>
	</header>
}

export default Header
import React from 'react'
import KButton from '../utilities/KButton'

const Header = () => {
	return <header className='flex justify-around py-3'>
		<div style={{alignItems:'center'}} className="left flex gap-24">
			<div className="logo">
				<img src="/vite.svg" alt="" srcset="" />
			</div>

			<div className='flex gap-6'>
				<a className='text-lg hover:text-orange-600' href="#">Annonces</a>
				<a className='text-lg hover:text-orange-600' href="#">Réalisations</a>
				<a className='text-lg hover:text-orange-600' href="#">Graphistes</a>
				<a className='text-lg hover:text-orange-600' href="#">Aide</a>
				<a className='text-lg hover:text-orange-600' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
			</div>
		</div>

		<div style={{alignItems:'center'}} className="rigth flex gap-5">
			<a href='#' className='text-lg hover:text-orange-600'>S'inscrire</a>
			<a href='#' className='text-lg hover:text-orange-600'>Se connecter</a>
			<KButton></KButton>
		</div>
	</header>
}

export default Header
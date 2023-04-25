import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'
import landingImg from '../../img/principal2.jpg'
import logo from '../../img/LOGO-HENRY-04.png'

export default function Landing() {
	return (
		<React.Fragment>
			<div className='brand-text-landing'>
				<img className='img-container' src={landingImg} alt="img-cont" />
				<img className='logo-container' src={logo} alt="img-logo" />
				<Link to='/recipes'>
					<button className='btn'>Welcome to Food Punto Com!</button>
				</Link>
			</div>
		</React.Fragment>
	);
}
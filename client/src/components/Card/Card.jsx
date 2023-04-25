import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card({ id, title, image, diets }) {
	const getDiets = function () {
		let arrayDiets = [];
		if (diets) {
			for (let diet of diets) {
				typeof diet === 'object' ? arrayDiets.push(diet.name) : arrayDiets.push(diet);
			}
		}
		return arrayDiets.length ? arrayDiets.join(', ') : 'Diets Not Found!'
	}
	return (
		<>
			<Link to={`/recipes/${id}`} className='card'>
				<div className='img-recipe'>
					<img src={image || 'https://media.tenor.com/tEShH_Z5ZUMAAAAd/spaghetti.gif'} alt={title} />
				</div>
				<div className='card-info'>
					<p className='name'>title recipe</p>
					<h2 className='card-title'>{title}</h2>
					<p className='name'>type if diets</p>
					<h4 className='card-diets'>{getDiets()}</h4>
				</div>
			</Link>
		</>
	)
}
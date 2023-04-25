import React from 'react';
import './About.css'

export default function About() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='about'>
                    <h1>Henry-Food</h1>
                    <p>Este proyecto es con el fin de practicar los conocimientos adquiridos a los lardo de mi carrera como  FullStack en HENRY aqui el link por si deseas conocer mas de ellos, Te los recomiendo al 100% si deseas aprender desarrollo  <a className='href-henry' href='https://www.soyhenry.com/' target='_blank' rel='noopener noreferrer'>  Henry bootcamp </a>.
                        los datos para esta aplicacion corresponden a SPOONACULAR aqui el link de ellos <a className='href-spoon' href='https://spoonacular.com/' target='_blank' rel='noopener noreferrer'>  the food API  </a>. </p>
                    <p>Esto es solo es un paso hacia la ruta que me llevara a grandes cosas en mi carrera como desarrollador.</p>
                </div>
                <h1 className='tech-title'>Used technologies:</h1>
                <div className='tech-container'>
                    <div className='javascript'>
                        <img className='img-javascript' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                        <h1 className='text-javascript'>Javascript</h1>
                    </div>
                    <div className='html'>
                        <img className='img-html' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                        <h1 className='text-html'>HTML</h1>
                    </div>
                    <div className='css'>
                        <img className='img-css' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                        <h1 className='text-css'>CSS</h1>
                    </div>
                    <div className='react'>
                        <img className='img-react' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                        <h1 className='text-react'>React</h1>
                    </div>
                    <div className='redux'>
                        <img className='img-redux' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                        <h1 className='text-redux'>Redux</h1>
                    </div>
                    <div className='express'>
                        <img className='img-express' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                        <h1 className='text-express'>Express</h1>
                    </div>
                    <div className='PostgreSQL'>
                        <img className='img-PostgreSQL' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                        <h1 className='text-PostgreSQL'>PostgreSQL</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

import React from 'react'
import './styles/Main.css';
import { FaFacebookSquare,FaCodepen,FaLinkedin,FaGithubSquare } from "react-icons/fa";
export default function Main() {
  return (
    <div className='main-page'>
       <div className='messageBox'> <h1 className='hi-message'>Hi There!</h1>
        <h3 className='welcome-message'>Welcome to my website, my name is <strong style={{ color: '#FF4433' }}>John Philip Dela Vega</strong> a computer science student. Feel free to explore the website.</h3>
        <div className='main-icons'>
        <a  target="_blank"rel=" noreferrer" href="https://www.facebook.com/delavegajaypee1"><FaFacebookSquare title='facebook' className='facebook-logo' size="2em" color={'black'} /></a>
        <a target="_blank"rel=" noreferrer" href="https://codepen.io/jaypee-dela-vega"><FaCodepen title='codepen' size="2em" color={'black'}className='codepen-logo'/></a>
        <a target="_blank"rel=" noreferrer" href="https://www.linkedin.com/in/john-philip-dela-vega-29b51820a/"><FaLinkedin title='linkedin' size="2em" color={'black'}className='linkedin-logo'/></a>
        <a target="_blank"rel=" noreferrer" href="https://github.com/JP-DelaVega?tab=repositories"><FaGithubSquare title='github'size="2em" color={'black'}className='github-logo'/></a></div>
        </div>
        <div className="shape-blob"></div>
	    <div className="shape-blob one"></div>
	    <div className="shape-blob two"></div>
    </div>
  )
}

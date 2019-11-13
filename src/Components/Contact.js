import React from "react"
import './Contact.scss';
import githubLogo from '../assets/github.svg';
import emailLogo from '../assets/email.svg';
import phoneLogo from '../assets/smartphone.svg';
import cvLogo from '../assets/cv.svg';


const About = () => {
  return (
    <div className='contacts'>
    <div>
      <a className='space-between' target='__blank' href='https://github.com/vikintasr'><img className='cntcIcon' src={githubLogo} />Github</a>
    </div>
    <div>
      <a className='space-between' target='__blank' href='https://drive.google.com/open?id=12GZRVbXbTqtcP5wc3k9C5J_hfReUn3zD'><img className='cntcIcon' src={cvLogo} /><p>Resume</p></a>
    </div>
    <div>
      <a className='space-between' href='mailto: vikintas.raudavicius@gmail.com'><img className='cntcIcon' src={emailLogo} />Email</a>
    </div>
    <div>
      <a className='space-between' href='tel:+44 7707 440374'><img className='cntcIcon' src={phoneLogo} />Phone</a>
    </div>
    </div>
  )
}
 
export default About;



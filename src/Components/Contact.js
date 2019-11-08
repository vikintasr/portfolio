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
      <a className='space-between' href=''><img src={githubLogo} />Github</a>
    </div>
    <div>
      <a className='space-between' href=''><img src={cvLogo} /><p>Resume</p></a>
    </div>
    <div>
      <a className='space-between' href=''><img src={emailLogo} />Email</a>
    </div>
    <div>
      <a className='space-between' href=''><img src={phoneLogo} />Phone</a>
    </div>
    </div>
  )
}
 
export default About;



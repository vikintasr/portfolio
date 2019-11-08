import React from "react"
import './Contact.scss';

const About = (props) => {
  return (
    <div className='contacts'>
    <div>
      <a className='space-between' href=''><img src='/assets/github-logo.svg' />Github</a>
    </div>
    <div>
      <a className='space-between' href=''><img src='/assets/cv.svg' /><p>Resume</p></a>
    </div>
    <div>
      <a className='space-between' href=''><img src='/assets/email.svg' />Email</a>
    </div>
    <div>
      <a className='space-between' href=''><img src='/assets/smartphone.svg' />Phone</a>
    </div>
    </div>
  )
}
 
export default About;
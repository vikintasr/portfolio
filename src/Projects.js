import githubLogo from './assets/github.svg';
import emailLogo from './assets/email.svg';
import phoneLogo from './assets/smartphone.svg';
import cvLogo from './assets/cv.svg';

export const Projects = [
  {
    id: 1,
    name: 'Site 1',
    tech: [
      'HTML',
      'CSS',
      'SASS',
      'React'
    ],
    description: 'Lorem',
    image: '/assets/img.jpg'
  },
  {
    id: 1,
    name: 'Site 2',
    tech: [
      'HTML',
      'CSS',
      'SASS',
      'React'
    ],
    description: 'Lorem',
    image: {cvLogo}
  },
  {
    id: 1,
    name: 'Site 3',
    tech: [
      'HTML',
      'CSS',
      'SASS',
      'React'
    ],
    description: 'Lorem',
    image: '../assets/cv.svg'

  }
];

export default Projects;
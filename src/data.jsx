import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-hamburguer.png';
import Work2 from './assets/calculator.png';
import Work3 from './assets/users.png';
import Work4 from './assets/converter-money.png';
import Work5 from './assets/imc.png';
import Work6 from './assets/my-game.png';
import Work7 from './assets/clock.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Sobre',
    icon: <FaUser className='nav__icon' />,
    path: '/sobre',
  },

  {
    id: 3,
    name: 'Portfólio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contato',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contato',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Daniel',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Barbosa',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Brazilian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Brasil',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+55 (38) 99728-2779',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'danielmendess.dev@gmail.com',
  },

  {
    id: 9,
    title: 'Instagram: ',
    description: 'daniel_mendes8',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Português',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '9+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '2+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Desenvolvi um sistema de cadastro de usuários usando ReactJs, usando alguns hooks para criar estados da aplicação como useState, usando react-router-dom para criar rotas (páginas do sistema). Criei um sistema de servidor com nodeJs usando express para receber dados jSon da frente da minha aplicação, usei uuid para criar um ID único para cada usuário cadastrado.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Web developer <span> Recent </span>',
    desc: 'Criei um sitema para uma hamburgueria, teve como o objetivo de receber dados do pedido do cliente até o local de preparo. Sitema desenvolvido com o ReactJs onde a página principal recebe os dados e nome do cliente, criei também um servidos com nodeJs onde gera e busca dados Json do Front, servidor Node que salva todos os dados novos criados. ',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'FullStack developer <span> DevClub </span>',
    desc: 'Ao longo dessa Formação, adquiri conhecimentos que agregaram muito no desenvolvimento da minha carreira, seja no aspecto técnico e qualidades interpessoais (soft skills). Nesse processo desenvolvemos algumas aplicações para fixar todo aprendizado decorrido ao longo do curso.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '88',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '76',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '71',
  },

  {
    id: 4,
    title: 'NodeJs',
    percentage: '34',
  },

  {
    id: 5,
    title: 'styled-componets',
    percentage: '38',
  },

  {
    id: 6,
    title: 'express',
    percentage: '34',
  },

  {
    id: 7,
    title: 'axios',
    percentage: '48',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'WEB APPLICATION',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Order taking system for a hamburger shop.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'My',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, React, Node with express',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://front-end-hamburger-project.vercel.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'CALCULATOR WEB APP',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web calculator',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'My app',
      },
      {
        icon: <FaCode />,
        title: 'technologies : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://calculadora-two-eosin.vercel.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'WEB APPLICATION',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'New user registration system',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'For me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, React, Node with express',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://project-react-user-registration.vercel.app',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'CONVERTER MONEY',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WEB APP CONVERTER MONEY',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'For me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://conversor-de-moedas-orpin.vercel.app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'WEB APP',
    details: [
      {
        title: 'Project : ',
        desc: 'Web app, Body Mass Index Calculator',
      },
      {
        title: 'Client : ',
        desc: 'For me',
      },
      {
        title: 'Language : ',
        desc: 'JavaScript, HMTL, CSS',
      },
      {
        title: 'Preview : ',
        desc: 'https://imc-calculator-first.vercel.app',
      },
    ],
  },
  {
    id: 6,
    img: Work6,
    title: 'Guessing game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Guessing game web',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'My ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://my-guessing-game.vercel.app',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Digital watch',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Digital watch',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'My ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://my-clock-gamma.vercel.app',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

import { Link } from 'react-router-dom';

import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiExternalLink,FiGithub  } from 'react-icons/fi';

import Work1 from './assets/myevents.png';
import Work2 from './assets/codeburguer.png';
import Work3 from './assets/users.png';
import Work4 from './assets/converter-money.png';
import Work5 from './assets/imc.png';
import Work6 from './assets/lookapp.png';
import Work7 from './assets/clock.png';
import Work8 from './assets/capa-ignews.png';
import Work9 from './assets/dashgoo.png';

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
    title: 'Nome: ',
    description: 'Daniel Barbosa',
  },
  {
    id: 3,
    title: 'Idade : ',
    description: '22 anos',
  },

  {
    id: 4,
    title: 'Nacionalidade: ',
    description: 'Brasileiro',
  },

  {
    id: 5,
    title: 'Freelance: ',
    description: 'Disponível',
  },

  {
    id: 6,
    title: 'Endereço: ',
    description: 'Montes Claros MG',
  },

  {
    id: 7,
    title: 'Whatsapp: ',
    description: '(38) 99728-2779',
  },

  {
    id: 8,
    title: 'Email: ',
    description: 'danielmendess.dev@gmail.com',
  },

 
  

  
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Anos de <br /> experiência',
  },

  {
    id: 2,
    no: '4+',
    title: 'Projetos <br /> desenvolvidos',
  },

  {
    id: 3,
    no: '3+',
    title: 'Curso <br /> concluídos',
  },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: '2023 ',
    title: 'DevClub <span> Formação Fullstack </span>',
    desc: 'Onde pude aprender o essencial do desenvolvimento full stack com JavaScript e React. Cobrindo desde o frontend com ReactJS até o backend com Node.js e Express. Banco de dados SQL e NoSQL com Postgres e MongoDB. Incluindo Docker e autenticação JWT. Desenvolvimento mobile com React Native. Projetos práticos durante toda a formação.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Rocketseat ignite Reactjs ',
    desc: 'Estou aprimorando minhas habilidades em ReactJS, com foco em Typescript, Clean Architecture, pirâmide de testes, Next.js, performance, data fetching e cache local, e autenticação e autorização. O que é essencial e me preparará para enfrentar desafios no desevolvimento web moderno e construir sistemas performáticos e eficientes.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'MyEvents<span> plataforma online </span>',
    desc: 'Desenvolvi uma plataforma de vendas de ingressos baseada no Sympla, utilizando Node.js com Fastify e React com Styled Components e Material-UI. Fui responsável por todas as etapas do projeto incluindo o design do layout no Figma, visando uma experiência de usuário moderna, simples e adaptativa. Utilizei Node.js com Fastify para construir um back end eficiente, integrando PostgreSQL via Neon. No front end, React com Styled Components e Material-UI. Implementei funcionalidades como login, cadastro, visualização de eventos e compra de ingressos com cartão de crédito, validação de formulários com Yup, além de realizar o design do layout no Figma.',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Codebuguer',
    desc: 'Como parte do aprendizado no curso DevClub desenvolvi um projeto de uma hamburgueria virtual, que envolveu todas as etapas do processo e a entrega de uma aplicação funcional e de qualidade. O Backend utilizando Node.js com Express, integrando bancos de dados PostgreSQL e MongoDB para armazenar e gerenciar os dados da aplicação. Implementei autenticação JWT para garantir a segurança das informações dos usuários. No front end, utilizei React em conjunto com Material-UI para criar uma interface intuitiva, oferecendo uma experiência agradável aos usuário. Telas Destintas por ter usuário admin então permite a ele a administração da hamburgueria, como editar, adicionar, remover novos produtos.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '88',
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '71',
  },
  {
    id: 3,
    title: 'Javascript',
    percentage: '76',
  },
  {
    id: 4,
    title: 'Typescript',
    percentage: '43',
  },
  {
    id: 5,
    title: 'Reactjs',
    percentage: '62',
  },
  {
    id: 6,
    title: 'Nextjs',
    percentage: '41',
  },

  {
    id: 7,
    title: 'NodeJs',
    percentage: '61',
  },

  {
    id: 8,
    title: 'Styled-Componets',
    percentage: '80',
  },

  {
    id: 9,
    title: 'Express',
    percentage: '58',
  },

  {
    id: 10,
    title: 'Axios',
    percentage: '48',
  },

  
  {
    id: 11,
    title: 'Fastify',
    percentage: '48',
  },
  {
    id: 12,
    title: 'React-Native',
    percentage: '47',
  },
  {
    id: 13,
    title: 'GIT e Github',
    percentage: '63',
  },
  {
    id: 14,
    title: 'Sass',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'MyEvents',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Plataforma de eventos baseada no Sympla.',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to= "https://github.com/daniel-barbosaa/myevents-front">Acesse o repositório </Link>,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'JavaScript, React, Styled-components, NodeJs, Fastify ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to="https://myevents-platform.vercel.app/eventos">Tenha uma experiência clicando aqui</Link>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Codeburguer',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Esse é um projeto de uma hamburgueria completa com diferentes funcionalidades.',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/code-burguer-app-front'>Acesse o repositório</Link> ,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'JavaScript, React, Node, Express,PostgreSQL, JWT e outras.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to="https://github.com/daniel-barbosaa/code-burguer-app-front">Tenha uma experiência clicando aqui</Link>,
      },
    ],
  },
  {
    id: 3,
    img: Work8,
    title: 'Ignews',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Relógio digital da web',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/'>Acessar Repositório</Link>,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to='https://my-clock-gamma.vercel.app'>Tenha uma experiência clicando aqui</Link> ,
      },
    ],
  },
  {
    id: 4,
    img: Work9,
    title: 'Dashgo.',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Dashboard de gestão de usuários',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/'>Acessar Repositório</Link>,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'Typescript, next.js, react.js, chakra.ui',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to=''>Tenha uma experiência clicando aqui</Link> ,
      },
    ],
  },


  {
    id: 5,
    img: Work3,
    title: 'Registro de usuários',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Sistema de cadastro de usuários',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/project-react-user-registration'>Acesse o repositório</Link> ,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'JavaScript, React, Node com express',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to='https://project-react-user-registration.vercel.app'>Tenha uma experiência clicando aqui</Link>,
      },
    ],
  },

  {
    id: 6,
    img: Work4,
    title: 'Conversor de moedas',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Aplicação conversor de moedas',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/conversor-de-moedas'>Acesse o repositório</Link> ,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc:<Link to='https://conversor-de-moedas-orpin.vercel.app'>Tenha uma experiência clicando aqui</Link> ,
      },
    ],
  },

  {
    id: 7,
    img: Work5,
    title: 'Calculadora IMC',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Permite calcular o seu indíce de massa corporal com base nos dados fornecido por você.',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa'>Acessar Repositório</Link>,
      },
      {
        icon: <FaCode />,
        title: 'Tecnoligias : ',
        desc: 'JavaScript, HMTL, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc:<Link to='https://imc-calculator-first.vercel.app'>Tenha uma experiência clicando aqui</Link>,
      },
    ],
  },

  {
    id: 8,
    img: Work6,
    title: 'LookApp',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'É uma aplicação semelhante a uma rede social, nela temos opção de Feed e realizar pedidos na loja do app. ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to='https://github.com/daniel-barbosaa/react-native-lookApp'>Acesse aqui</Link>,
      },
      {
        icon: <FaCode />,
        title: 'Tecnoligias : ',
        desc: 'JavaScript, React-Native, Styled-Components, Async-Storage, Drawer-navigation, Stretchy',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/react-native-lookApp'>Acessar Repositório</Link>,
      }
     
    ],
  },
  
  {
    id: 9,
    img: Work7,
    title: 'Relógio digital',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Relógio digital da web',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: <Link to='https://github.com/daniel-barbosaa/'>Acessar Repositório</Link>,
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias : ',
        desc: 'JavaScript, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Visualizar : ',
        desc: <Link to='https://my-clock-gamma.vercel.app'>Tenha uma experiência clicando aqui</Link> ,
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

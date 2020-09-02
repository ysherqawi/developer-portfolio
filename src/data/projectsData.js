import {
  devCamperImg,
  devConnectorImg,
  ecommerceImg,
  movieAppImg,
} from '../assets/imgUrl';

const projectsData = [
  {
    name: 'Devcamper Api',
    type: 'Backend project',
    tech: 'Nodejs, Express, Mongodb',
    image: devCamperImg,
    description: 'Backend API for a bootcamp directory website',
    live: '',
    github: 'https://github.com/',
  },
  {
    name: 'DevConnector',
    type: 'Fullstack project',
    tech: 'Nodejs, Express, Mongodb, React, Redux',
    image: devConnectorImg,
    description: 'Social network for developers, built on the MERN stack',
    live: '',
    github: 'https://github.com/',
  },
  {
    name: 'MovieApp',
    type: 'Frontend project',
    tech: 'React, Hooks, The Movie Database Api',
    image: movieAppImg,
    description: 'Search and View Movies Using The Movie Database Api',
    live: '',
    github: 'https://github.com/',
  },
  {
    name: 'Ecommerce Api',
    type: 'Backend project',
    tech: 'Nodejs, Express, Mongodb',
    image: ecommerceImg,
    description: 'Backend API for Ecommerce application',
    live: '',
    github: 'https://github.com/',
  },
  {
    name: 'Github Finder',
    type: 'Frontend project',
    tech: 'React, Hooks, Context,  Github Api',
    image: undefined,
    description: 'Search and View Github Users Using Github Api',
    live: '',
    github: 'https://github.com/',
  },
  {
    name: 'Contact Keeper',
    type: 'Fullstack project',
    tech: 'Nodejs, Express, Mongodb, React, Hooks, Context',
    image: undefined,
    description: 'Contact manager, built on the MERN stack',
    live: '',
    github: 'https://github.com/',
  },
];

export default projectsData;

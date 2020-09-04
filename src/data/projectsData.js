import {
  devCamperImg,
  nodeChatAppImg,
  devConnectorImg,
  ecommerceImg,
  movieAppImg,
  githubFinderImg,
} from '../assets/imgUrl';

const projectsData = [
  {
    name: 'Devcamper API',
    type: 'Backend project',
    tech: 'Nodejs, Express, Mongodb',
    image: devCamperImg,
    description: 'Backend API for a bootcamp directory website',
    live: '',
    github: 'https://github.com/ysherqawi/devcamper-api',
  },

  {
    name: 'DevConnector',
    type: 'Fullstack project',
    tech: 'Nodejs, Express, Mongodb, React, Redux',
    image: devConnectorImg,
    description: 'Social network for developers, built with the MERN stack',
    live: '',
    github: 'https://github.com/ysherqawi/devconnector',
  },
  {
    name: 'MovieApp',
    type: 'Frontend project',
    tech: 'React, Hooks, The Movie Database API',
    image: movieAppImg,
    description: 'Search and view movies using the movie database API',
    live: '',
    github: 'https://github.com/ysherqawi/movie-app',
  },
  {
    name: 'Ecommerce API',
    type: 'Backend project',
    tech: 'Nodejs, Express, Mongodb',
    image: ecommerceImg,
    description: 'Backend API for ecommerce application',
    live: '',
    github: 'https://github.com/ysherqawi/ecommerce-api',
  },
  {
    name: 'Chat App',
    type: 'Backend Project',
    tech: 'Nodejs, Express, Socket.io',
    image: nodeChatAppImg,
    description: 'Chat application designed with nodejs and socket.io',
    live: '',
    github: 'https://github.com/ysherqawi/chat-application',
  },

  {
    name: 'Github Finder',
    type: 'Frontend project',
    tech: 'React, Hooks, Context,  Github API',
    image: githubFinderImg,
    description: 'Search and view github profiles using github API',
    live: '',
    github: 'https://github.com/ysherqawi/github-finder',
  },
];

export default projectsData;

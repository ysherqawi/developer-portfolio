import {
  devCamperImg,
  nodeChatAppImg,
  devConnectorImg,
  proshop,
  movieAppImg,
  donewithitImg,
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
    name: 'Proshop',
    type: 'Fullstack project',
    tech: 'Nodejs, Express, Mongodb, React, Redux',
    image: proshop,
    description: 'eCommerce platform built with the MERN stack',
    live: '',
    github: 'https://github.com/ysherqawi/proshop',
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
    name: 'DoneWithIt',
    type: 'Frontend project',
    tech: 'React Native',
    image: donewithitImg,
    description: "A marketplace for the stuff you don't need anymore",
    live: '',
    github: 'https://github.com/ysherqawi/donewithit',
  },
];

export default projectsData;

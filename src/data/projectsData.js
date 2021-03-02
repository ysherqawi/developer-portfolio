import {
  devCamperImg,
  nodeChatAppImg,
  devConnectorImg,
  proshop,
  movieAppImg,
  covidAppImg,
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
    name: 'Covid-19 Tracker',
    type: 'Frontend project',
    tech: 'React, Material UI, Chart.js, Covid-19 API',
    image: covidAppImg,
    description:
      'Get the latest statistics globally and for a specific country',
    live: '',
    github: 'https://github.com/ysherqawi/covid19-tracker',
  },
];

export default projectsData;

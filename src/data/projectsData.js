import {
  devCamperImg,
  nodeChatAppImg,
  devConnectorImg,
  proshop,
  realtorAppImg,
  donewithitImg,
} from "../assets/imgUrl";

const projectsData = [
  {
    name: "Realtor App",
    type: "Backend project",
    tech: "Nestjs, TypeScript, PostgreSQL",
    image: realtorAppImg,
    description: "Backend API for Realtor application",
    live: "",
    github: "https://github.com/ysherqawi/realtor-app",
  },
  {
    name: "Devcamper API",
    type: "Backend project",
    tech: "Nodejs, Express, Mongodb",
    image: devCamperImg,
    description: "Backend API for a bootcamp directory website",
    live: "",
    github: "https://github.com/ysherqawi/devcamper-api",
  },

  {
    name: "DevConnector",
    type: "Fullstack project",
    tech: "Nodejs, Express, Mongodb, React, Redux",
    image: devConnectorImg,
    description: "Social network for developers, built with the MERN stack",
    live: "",
    github: "https://github.com/ysherqawi/devconnector",
  },
  {
    name: "Proshop",
    type: "Fullstack project",
    tech: "Nodejs, Express, Mongodb, React, Redux",
    image: proshop,
    description: "eCommerce platform built with the MERN stack",
    live: "",
    github: "https://github.com/ysherqawi/proshop",
  },
  {
    name: "Chat App",
    type: "Backend Project",
    tech: "Nodejs, Express, Socket.io",
    image: nodeChatAppImg,
    description: "Chat application designed with nodejs and socket.io",
    live: "",
    github: "https://github.com/ysherqawi/chat-application",
  },

  {
    name: "DoneWithIt",
    type: "Frontend project",
    tech: "React Native",
    image: donewithitImg,
    description: "A marketplace for the stuff you don't need anymore",
    live: "",
    github: "https://github.com/ysherqawi/donewithit",
  },
];

export default projectsData;

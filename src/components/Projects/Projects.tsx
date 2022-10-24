import ProjectCard from "./ProjectCard"
import malitolia from '../../assets/malitolia.webp'
import viajaPeru from '../../assets/viajaPeru.webp'
import redSocial from '../../assets/redSocial.webp'
import portafolio from '../../assets/portafolio.webp'
import pokeApp from '../../assets/pokemonApp.webp'
import chat from '../../assets/chat.webp'
import editorOnline from '../../assets/editor-online.webp'
import './Projects.css'

const cardProjects = [
  {
  title: 'Online Editor',
  description: 'Full stack project with websockets and JWT',
  image : editorOnline,
  link: 'https://editor-online-app.netlify.app',
  github : 'https://github.com/123CarlosDaniel/online-editor'
  },
  {
    title: 'Chat Websockets',
    description: 'Full stack project with websockets and JWT',
    image : chat,
    link: 'https://chat-websockets-practice.netlify.app',
    github : 'https://github.com/123CarlosDaniel/chat-typescript'
  },
  {
    title: 'PokeApp',
    description: 'Full stack project with GraphQL',
    image: pokeApp,
    link: 'https://mypokeapp.ml/',
    github : 'https://github.com/123CarlosDaniel/pokeApp-JWT-Graphql'
  },
  {
    title: 'Malitolia',
    description: 'Full stack project, uploader images',
    image: malitolia,
    link: 'https://malitolia.netlify.app',
    github : 'https://github.com/123CarlosDaniel/Ecommerce-app'
  },
  {
    title: 'Red Social',
    description: 'Front-end project with MUI',
    image: redSocial,
    link : 'https://mui-social-practice.netlify.app',
    github : 'https://github.com/123CarlosDaniel/mui-social'
  },
  {
    title: 'Viaja Perú',
    description: 'Front-end project React',
    image: viajaPeru,
    link: 'https://landingpage12486.herokuapp.com/',
    github : 'https://github.com/123CarlosDaniel/Landinpage-React'
  }
  ,
  {
    title: 'Portafolio',
    description: 'Front-end project React',
    image: portafolio,
    link: 'https://123carlosdaniel.github.io/portfolio/',
    github : 'https://github.com/123CarlosDaniel/portfolio'
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="cards-container">
        {cardProjects.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
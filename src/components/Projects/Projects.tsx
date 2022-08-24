import ProjectCard from "./ProjectCard"
import malitolia from '../../assets/malitolia.webp'
import viajaPeru from '../../assets/viajaPeru.webp'
import redSocial from '../../assets/redSocial.webp'
import portafolio from '../../assets/portafolio.webp'
import pokeApp from '../../assets/pokemonApp.webp'
import './Projects.css'

const cardProjects = [
  {
    title: 'PokeApp',
    description: 'Proyecto fullStack personal PokemonApp',
    image: pokeApp,
    link: 'https://mypokeapp.ml/'
  },
  {
    title: 'Malitolia',
    description: 'Proyecto fullStack personal Malitolia',
    image: malitolia,
    link: 'https://productos-frontend-cdcm.herokuapp.com/'
  },
  {
    title: 'Red Social',
    description: 'Proyecto frontend personal con Material UI',
    image: redSocial,
    link : 'https://redsocialbasica1476.herokuapp.com/'
  },
  {
    title: 'Viaja Perú',
    description: 'Proyecto fullStack personal Viaja Perú',
    image: viajaPeru,
    link: 'https://landingpage12486.herokuapp.com/'
  }
  ,
  {
    title: 'Viaja Perú',
    description: 'Proyecto fullStack personal para Viaja Perú',
    image: portafolio,
    link: 'https://portafo121534.herokuapp.com/'
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
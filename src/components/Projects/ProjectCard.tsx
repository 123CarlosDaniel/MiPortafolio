
interface ProjectCardProps {
  image: string,
  title: string,
  description: string,
  link : string
}

const ProjectCard = (props : ProjectCardProps) => {
  
  return (
    <div className='card-project'>
      <img className="card-image" src={props.image} alt={props.title}/>
      <div className="card-content">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-description">{props.description}</p>
        <button><a href={props.link} target="_blank">See project</a></button>
      </div>
    </div>
  )
}

export default ProjectCard
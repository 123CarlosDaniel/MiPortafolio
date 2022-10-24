import './About.css'
import Canvas from './Canvas'


const About = () => {
  const draw = (ctx : CanvasRenderingContext2D) => {
    ctx.fillStyle = "#000"
    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, Math.PI * 2)
    ctx.fill()
  }
  return (
    <section id="about">
      <h2 className="about-title">About me</h2>
      <p className='p-about'>I'm a self-taught programmer, i really enjoy learning new technologies and i do it fast.
           Everytime i find a problem i try until i solve it.</p>
      <div className="about-content">
        <div className="p-container">
          <div>
            <h4 className="p-title">Front-end</h4>
            <p className="p-content">
                <li>HTML, CSS, JavaScript, Git</li>
                <li>React, React Router Dom, React Query</li>
                <li>Web API, React Native (basic)</li>
            </p>
          </div>
          <div>
            <h4 className="p-title">Back-end</h4>
            <p className="p-content">
                <li>Node.js, Express, TypeScript </li>
                <li>MongoDB, PostgreSQL, MySQL</li>
                <li>FullStack apps deployment</li>
            </p>
          </div>
          <div>
          <h4 className="p-title">Extra skills</h4>
            <p className="p-content">
                <li>Docker, Go for API development, Python</li>
                <li>knowledge of algorithms and data structures</li>
                <li>English, Spanish</li>
            </p>
          </div>
        </div>
        <div className='vertical-center'>
        <div className="canvas-container">
          <span className='canvas-span'>Created with canvas HTML</span>
          <Canvas draw={draw}></Canvas>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About

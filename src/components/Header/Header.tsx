import './Header.css'
import { ImLinkedin2} from 'react-icons/im'
import {RiGithubFill} from 'react-icons/ri'
import {TbBrandTwitter} from 'react-icons/tb'
import CV from '../../assets/CV.pdf'
const Header = () => {
  return (
    <section className="header" id="principal">
      <div className="overlay"></div>
      <div className='header-container'>
      <div className="header-content">
        <h2 className="header-title">Welcome, I'm Carlos Choque</h2> 
        <h4>FullStack Web Developer</h4>
        <p>
        I am a developer with experience in the development of web applications, 
        with the ability to solve any type of problem, 
        I have a great capacity for teamwork and with a good desire to continue learning. 
        </p>
        <div className='header-buttons'>
        <button><a href="#contact">Contact me</a></button>
        <button><a href={CV} download>See résumé</a></button>
        </div>
      </div>
      <div className='header-content'>
        <h4>My social networks</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/carlos-c-moreno-17b917192/" target={'_blank'} ><ImLinkedin2/></a></li>
          <li><a href="https://github.com/123CarlosDaniel" target={'_blank'} ><RiGithubFill/></a></li>
          <li><a href="https://twitter.com/cdc_mo" target={'_blank'} ><TbBrandTwitter/></a></li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Header

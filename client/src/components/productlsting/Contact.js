import './prodlist.css'
import {Link} from 'react-router-dom'

function About() {

  
  return (
    <div>
    <div className='about-section'>
        <h2>Contact</h2>
        <div>Phone: +234 7060758339, +234 9131823783</div><br/>
        <div>Email: rayicon@gmail.com, techlodas@gmail.com</div><br/>
        <div>Portfolio:</div>
        <div>linkedIn: <Link to='https://www.linkedin.com/in/raymond-iwobi-843785157/'>https://www.linkedin.com/in/raymond-iwobi-843785157/</Link></div>
    </div>
    </div>
  )
}

export default About

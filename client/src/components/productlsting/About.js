import './prodlist.css'
import {Link} from 'react-router-dom'

function About() {

  
  return (
    <div>
    <div className='about-section'>
        <h2>About</h2>
        <div>This app was designed to display products listing from an external API, search the products and also add them to cart</div><br/>
        <div>Built with React, Redux toolkit, API from https://fakestoreapi.com/products, search functionality</div><br/>
        <div>Built by Raymond Iwobi</div>
    </div>
    </div>
  )
}

export default About

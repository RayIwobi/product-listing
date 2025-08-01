// import searchme from './assets/search.png'
import {Link} from 'react-router-dom'
import './prodlist.css'


function Navigation({search, setSearch}) {
     //for the search function, converted to prop

    return (
    <div>
      <div className='topBar'>
                <Link to='/'><div className='site-title'>rayicon store</div></Link>
                <div className='search-component'>
                <input
                    type='text'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)} 
                    placeholder='Search products...'
                    className='searchspot'
                />
                {/* <img src={searchme} alt=''className='searchicon' />  */}
                </div>
                <div className='links'>
                    <ul className='ul-links'>
                        <Link to='/'><li>Home</li></Link>
                         <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Navigation

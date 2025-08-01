import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ban from './assets/ban.jpg'
import './prodlist.css'
import {Link} from 'react-router-dom'
import boy from './assets/boy.png'

import { useDispatch } from 'react-redux'
import { addToCart } from '../productlsting/redux/CartSlice'


function ProductListing({search}) {
    const [list, setList] = useState([]) //for the api

    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => setList(res.data))
        .catch((err) => console.log(err))
    },[])


    const filteredList = list.filter((prod) => (
        prod.title.toLowerCase().includes(search.toLowerCase())
    ))
  
  return (
    <div className='total-container'>
        <div>
            <div className='bannerimg'>
                <img src={ban} alt='topimage' className='cika' />
            </div>
            
        </div>
        
    <div className='listing-title'>
        <h3>New Stock</h3>
    </div>

    <div className='prod-listing'>
        
         
        
        {/* { list.filter((prod) => {
            if(search === ""){
                return prod;

            }else if(prod.title.toLowerCase().includes(search.toLowerCase())){
                return prod;
            }
            return false
        })  */}

        { filteredList.length > 0 ? (
         filteredList.map((prod) => {
                return<div key={prod.id} className='prod-items'>

                    <Link to={`/product/${prod.id}`}>
                    <img src={prod.image} alt='imagephoto' />
                    </Link>

                    <h3>{prod.title} </h3>
                    <div className='price'>Price: ${prod.price} </div>

                    <div className='cartButton'>
                        <button onClick={() => dispatch(addToCart({...prod, quantity:1}))}>Add to cart</button>
                    </div>
                    
                    </div>
            })):(
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={boy} alt='' style={{width:'45px', height:'45px'}}/>
                    <h3>&nbsp;No Items found!!</h3>
                </div>
            )
            
        }
    </div>
    </div>
  )
}

export default ProductListing

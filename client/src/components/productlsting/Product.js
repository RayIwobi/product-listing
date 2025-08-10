import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from  'react-router-dom'
import './prodlist.css'
import {useDispatch} from 'react-redux'
import {addToCart} from '../productlsting/redux/CartSlice'

function Product() {
    const [list, setList] = useState('') 

    const dispatch = useDispatch()
    console.log(dispatch)

    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setList(res.data))
        .catch((err) => console.log(err))
    },[id])

  return (
    <div className='main-container'>
        <Link to='/'><h4>/Back to Home/</h4></Link>
      <div className='product-details'>
        <img src={list.image} alt='product-image' />
        <div className='item-details'>
        <div id='titles'>{list.title}</div>
        <div className='prod-text'>Price: ${list.price}</div>
        <div className='prod-text'>Category: {list.category}</div>

        <div className='cartButton'>
            <button onClick={() => dispatch(addToCart({...list, quantity: 1}))}>Add to cart</button><br/>
            <button >Go to cart</button>
        </div>

        <h3 className='desc'>Description</h3><br/>
        <div className='prod-text'>{list.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Product

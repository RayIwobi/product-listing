import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeFromCart, clearCart} from './redux/CartSlice'

function Cart() {
    const cartItems = useSelector(state =>state.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch()

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className='cart'>
        <h2>Cart</h2>
        {cartItems.map(item => (
            <div key={item.id}>
                {item.title} - ${item.price} x {item.quantity} = ${item.price * item.quantity}

                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
        ))}

        {cartItems.length > 0 && (
        <>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart

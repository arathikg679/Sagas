import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from './cartSlice';


const Cart = () => {
    const dispatch =useDispatch();
    const cartitems = useSelector((state)=>state.cart)
    const removebooks =(isbn13)=>{
        dispatch(remove(isbn13))
    }
  return (
    <div className='container text-center pt-5 mb-5'>
    <table  className='table w-100'>
      <tr>
        <th>Book Cover</th>
        <th>Book title</th>
        <th>Price</th>
      </tr>
        {cartitems.map((item)=>(
            <tr key={item.isbn13}>
              <td><div><img src={item.image} width={200} height={200} alt="img"/></div></td>
              <td><div><h5>{item.title}</h5></div></td>
              <td><div><h5>{item.price}</h5></div></td>
              <td><div><button className='btn btn-outline-dark w-100' onClick={()=>removebooks(item.isbn13)}>Delete</button></div>
              </td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default Cart
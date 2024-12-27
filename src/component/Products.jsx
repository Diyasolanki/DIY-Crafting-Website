import React , {useContext , useState} from 'react'
import { CartContext } from './CartContext'
import {data} from '../Data/data'
const Products = () => {
  const { cart , addToCart} = useContext(CartContext);
  const[msg , setMsg] = useState('');

  const handleAddToCart = (product) => {
    if(cart.find((item) => item.id === product.id)){
      setMsg(`${product.name} is already in your cart!`);
    }
    else{
      addToCart(product);
      setMsg(`${product.name} has been added to  Your cart`);
    }
    setTimeout(()=> setMsg('') , 1000);
  }

  return (
    <>
    <div>
      {msg && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow" >{msg}</div>
      )}
    </div>
     <div className='m-5 '>
     <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {data.map((product) => {
        return <li key={product.id}
        className='border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition'>
          <img src={product.img} alt="" className='h-40 w-full object-cover rounded-md'/>
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="mt-2 font-bold">Price : {product.price}</p>
          <button onClick={() => 
          // console.log('Add To Cart : ',product);
          handleAddToCart(product)}
          className="w-full mt-4 bg-violet-700 text-white py-2 px-4 rounded-md hover:bg-violet-800 transition">Add To Cart</button>
        </li>
      })

      }
     </ul>
     </div>
     
    </>
   
  )
}

export default Products
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, clearCart ,updateQuantity } = useContext(CartContext);

    const totalPrice = cart.length > 0
        ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
        : 0;

    if (cart.length === 0) {
        return <h1  className="text-center text-lg mt-20 text-gray-700">Your Cart is Empty</h1>;
    }

    let nevigate = useNavigate();
    const routechange = () => {
        let path = '/checkout'
        nevigate(path);

    }

    return (
        <div className='p-4'>
            <h1 className='text-center text-lg bg-violet-800 text-white mt-4 w-48 mx-auto p-2 rounded-md'>Your Cart</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
                {cart.map((item) => (
                    <li key={item.id}>
                        <img src={item.img} alt="img" />
                        <h3 >{item.name}</h3>
                        <p >{item.description}</p>
                        <p > Price : {item.price}</p>
                
                        <div className="flex mt-2 space-x-3">
                                    <button
                                        className="bg-violet-700 text-white px-3 py-1 rounded"
                                        onClick={() => updateQuantity(item.id, false)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="bg-violet-700 text-white px-3 py-1 rounded"
                                        onClick={() => updateQuantity(item.id, true)}
                                    >
                                        +
                                    </button>
                                </div>
                        <button className=' bg-red-500 text-md p-2 mt-2 '
                            onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => clearCart()}
                className=' text-md bg-violet-700 p-2 ml-72 mt-3' >Clear Cart</button>

            <div className='flex flex-row gap-8 mt-5'>
                <h1 className='ml-3 text-lg border-4 border-s-violet-800 w-40 p-2'><b>Total cost : {totalPrice}</b></h1>
                <button className=' bg-green-500 px-3  text-md text-white'
                 onClick={routechange}>Order Now</button>
            </div>




        </div>
    );
};

export default Cart;


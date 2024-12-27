import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => (
    <header className="bg-violet-900 shadow-md ">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center sm:flex-row flex-col">
        <div className="text-lg font-bold text-white">DIY Craft Shop</div>
        <ul className="flex space-x-4 sm:mt-0 mt-2">
          <li><Link to="/" className="text-white hover:text-green-600 font-bold">Home</Link></li>
          <li><Link to="/product" className="text-white hover:text-green-600 font-bold">Products</Link></li>
          <li><Link to="/cart" className="text-white hover:text-green-600 font-bold">Cart</Link></li>
          <li><Link to="/checkout" className="text-white hover:text-green-600 font-bold">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  );
  
   export default Header;
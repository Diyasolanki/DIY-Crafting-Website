import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HOme from './component/Home'
import Products from './component/Products'
import Cart from './component/Cart'
import Header from './component/Header'
import Footer from './component/Footer'
import CheckOut from './component/CheckOut'
import { CartProvider } from './component/CartContext'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <CartProvider>
          <Router>
            {/* Responsive Header */}
            <Header />
            
            {/* Main Content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HOme />} />
                <Route path="product" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
              </Routes>
            </main>

            {/* Responsive Footer */}
            <Footer />
          </Router>
        </CartProvider>
      </div>
    </>
  )
}

export default App

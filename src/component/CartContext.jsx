import { createContext , useState , useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart , setCart] = useState(()=> {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(()=> {
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart])
    
    const addToCart = (product) => {
        // setCart((prev) => [...prev , product ]);
        setCart((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                return [...prev];
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

    const updateQuantity = (productId, increment) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity: increment
                            ? item.quantity + 1
                            : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        )
    };
  
    const removeFromCart = (productid) => {
        setCart((prev) => prev.filter((item) => item.id !== productid));
    }
    const clearCart = () => {
        setCart('');
    }
    //for debugging for items displayed
    // useEffect(()=>{
    //     console.log('cart Updated' , cart);
    // },[cart])
    
    return (
        <CartContext.Provider value={{cart , addToCart , removeFromCart ,clearCart ,updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

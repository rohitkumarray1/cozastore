// Store.js
import { createContext, useState, useEffect } from "react";

export const Store = createContext({
    scrollTop: () => { },
    productsData: [],
    pageLoading: false,
    handleAddtoCart: () => { },
    cartProduct: [],
    addCartMsg: '',
    cartProductQuantity: 0,
    cartPrice: 0,
    cartDiscount: 0,
    cartDelivery: 0,
    cartTotalAmount: 0,
    cartSallerPrice: 0,
    handleWishlist: () => { },
    addWishlist : false,
    wishlistProducts: [],
    wishlistQuantity: 0,
    handelRemove: () => { },
    handelRemoveCartProduct: () => { },
});

const StoreProvider = ({ children }) => {
    const [productsData, setProducts] = useState([]);
    const [pageLoading, setPageLoading] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);
    const [addCartMsg, setAddCartMassage] = useState('')
    const [cartProductQuantity, setProductQuantity] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)
    const [cartSallerPrice, setCartSallerPrice] = useState(0)
    const [cartDiscount, setCartDiscount] = useState(0)
    const [cartDelivery, setCartDelivery] = useState(0)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [addWishlist, setAddWishlist] = useState(false);
    const [wishlistProducts, setWishlistProducts] = useState([])
    const [wishlistQuantity, setWishtlistQuantity] = useState(0)


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        setPageLoading(true)
        fetch('https://rohitkumar236.github.io/productdata/ProductDatabase.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        setTimeout(() => {
            setPageLoading(false)
        }, 2000);
    }, []);


    const handleAddtoCart = (product) => {
        const isProductInCart = cartProduct.some(cartItem => cartItem.id === product.id);
        if (!isProductInCart) {
            const cartProducts = [...cartProduct, product];
            setCartProduct(cartProducts);
            setAddCartMassage(`${product.name} is added to the cart`);
            setProductQuantity(cartProductQuantity + 1);
            setCartPrice(cartPrice + product.price);
            const discountAmount = product.price * product.discount_percentage / 100;
            setCartSallerPrice(cartSallerPrice + product.price - discountAmount);
            setCartDiscount(discountAmount);
            setCartDelivery(cartDelivery + 49);
            setCartTotalAmount(cartTotalAmount + product.price - discountAmount);
            return;
        }
    };


    const handelRemoveCartProduct = (productId) => {
        const updatedCart = cartProduct.filter(product => product.id !== productId);
        setCartProduct(updatedCart)
        setProductQuantity(updatedCart.length)
    }

    const handleWishlist = (product) => {
        const isProductInWishlist = wishlistProducts.some(wishlistItem => wishlistItem.id === product.id)
        setAddWishlist(product.id)
        if (!isProductInWishlist) {
            setWishlistProducts([...wishlistProducts, product])
            setWishtlistQuantity(wishlistQuantity + 1)
            return;
        }
    }

    const handelRemove = (productId) => {
        const updatedWishlist = wishlistProducts.filter(product => product.id !== productId);
        setWishlistProducts(updatedWishlist);
        setWishtlistQuantity(updatedWishlist.length);
    };


    const contextValue = {
        scrollTop,
        productsData,
        pageLoading,
        handleAddtoCart,
        cartProduct,
        addCartMsg,
        cartProductQuantity,
        cartPrice,
        cartDiscount,
        cartDelivery,
        cartTotalAmount,
        cartSallerPrice,
        addWishlist, setAddWishlist,
        handleWishlist,
        wishlistProducts,
        wishlistQuantity,
        handelRemove,
        handelRemoveCartProduct,
    };

    return (
        <Store.Provider value={contextValue}>
            {children}
        </Store.Provider>
    );
};

export default StoreProvider;
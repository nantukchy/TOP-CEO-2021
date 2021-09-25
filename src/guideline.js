// // first
// add image icon at web site by using

// immport logo

// //second
// shoop load data
// copy file data and paste it to public withh jsonh extnsion

// use effect load data
// product map then send it to as a component product

// const [products, setProducts] = useState([]);
// useEffect(() => {
//     fetch('./products.JSON')
//         .then(res => res.json())
//     .then(data => setProducts(data))
    
// }, [])
// return (
//     <div className="shop-container">
//         <div className="product-container">
//             {
//                 // for send data as component 
//                 products.map(product => <Product key={product.key} product={product} 
//                     handleAddToCart={handleAddToCart}
//                     />)
//             }
//         </div>
//         <div className="cart-container">
//            <Cart cart={cart}/>
//         </div>
        
//     </div>

//     //step three
// go product for send props and destrureing
// const Product = (props) => {
//     console.log(props);
//     const { name, seller, price, img, stock } = (props.product);
//     const element = <FontAwesomeIcon icon={faShoppingCart} />
//     return (
//         <div className='products'>
//             <div>
//             <img src={img} alt="" />
//             </div>
//             <div className='details'>
//             <h3>{name}</h3>
//             <p>by :{seller}</p>
//             <h4>${price}</h4>
//                 <p>Only {stock} left in stock - Order Soon</p>
//                 <button
//                     onClick={() =>props.handleAddToCart(props.product)}
//                     className='purchase'>{element} add to cart
//                 </button>
//             </div>
//         </div>
//     );
// };
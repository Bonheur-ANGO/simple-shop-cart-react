import { useContext } from "react";
import { PRODUCTS } from "../../Products"
import {ShopContext} from '../../context/ShopContext';
import { CartIem } from "./CartIem";
import './style/cart.css'
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) =>{
          if (cartItems[product.id] !== 0) {
            return <CartIem data={product} />
          }
        })}
      </div>
        {totalAmount > 0 ? 
        (<div className="checkout">
          
          <p>Subtotal: {totalAmount}€</p>
          <button onClick={() => {navigate("/")}} >Continue Shopping</button>
          <button>checkout</button>
        </div>) : (<h1>Your cart is empty</h1>)}
    </div>
  )
}

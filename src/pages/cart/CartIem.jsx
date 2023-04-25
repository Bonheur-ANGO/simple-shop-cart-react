import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"

export const CartIem = (props) => {
    const {id, productName, price, productImage} = props.data
    const {addToCart, cartItems, removeFromCart, updateCartItem} = useContext(ShopContext)
  return (
    <div className="cartItem">
        <img src={productImage} />
        <div className="description">
            <p><b> {productName} </b></p>
            <p>{price}€</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItem(parseInt(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

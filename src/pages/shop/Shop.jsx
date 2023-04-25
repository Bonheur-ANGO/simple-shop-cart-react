import {PRODUCTS} from '../../Products';
import {Product} from '../shop/Product';
import './style/shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>B-SHOP</h1>
      </div>
      <div className='products'>
        {
          PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}

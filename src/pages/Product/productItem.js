import styles from './Product.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function ProductItem({ addCart, product, setOpenInforModal, setOpenBuyModal, setProductActive }) {

    return (
        <div className={cx('product-item')}>
            <NavLink to={product.to} className={cx('product-img')}>
                <img src={product.img_src} />

            </NavLink>
            <div className={cx('options')}>
                <div className={cx('options-icon')}>
                    <div className={cx('cart-icon')}
                        onClick={() => {
                            addCart(product)
                            setOpenBuyModal(true)
                            setProductActive(product)
                        }}
                    >
                        <FontAwesomeIcon icon={faBasketShopping} />
                    </div>
                    <div className={cx('infor-icon')}
                        onClick={()=>{
                            setOpenInforModal(true)
                            setProductActive(product)
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
            <div className={cx('product-infor')}>
                <NavLink to={`/product/${product.id}`} className={cx('product-name')}>
                    {product.name}
                </NavLink>
                <div className={cx('product-price')}>
                    {
                        product.price_sale ? (
                            <>
                                <span className={cx('price-sale')}>{(product.price_sale)}đ</span>
                                <span className={cx('price-main')}>{(product.price_main)}đ</span>
                            </>
                        ) : (
                            <>
                                <span className={cx('price-main', 'no-under')}>{(product.price_main)}đ</span>
                            </>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductItem
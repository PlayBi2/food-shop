import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCaretDown, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import Logo from '../../../component/Logo'
import { routes } from '../../../config/routes'
import SearchBlock from '../../../component/searchBlock';
import Login from '../../../component/Login';
import ShoppingCart from '../../../component/ShoppingCart';
import ProductKind from '../../../pages/Product/productKind'
import Direct from '../../../component/Direct';
import handleCart from '../../../App'
import data from '../../../data/db.json'

const cx = classNames.bind(styles)

const Directions = [
    {
        id: 1,
        name: 'Trang chủ',
        path: routes.home
    },
    {
        id: 2,
        name: 'Giới thiệu',
        path: routes.intro
    },
    {
        id: 3,
        name: 'Sản phẩm',
        path: routes.product
    },
    {
        id: 4,
        name: 'Tin tức',
        path: routes.news
    },
    {
        id: 5,
        name: 'Liên hệ',
        path: routes.contact
    }
]


function Header({ cart, removeCart, setSearchResult, login }) {
    const [searchValue, setSearchValue] = useState('')
    const productKind = data.productKind
    const products = data.products

    const Search = () => {
        const result2 = []
        products.forEach(product => {
            if (product.name.toUpperCase().includes(searchValue.trim().toUpperCase())) {
                result2.push(product)
            }
        })
        setSearchResult(result2)
    }


    return (
        <div className={cx('header')}>
            <div className={cx('grid wide')}>
                <div className={cx('header-section')}>
                    <div className={cx('c-2')}>
                        <div className={cx('logo')}>
                            <Logo
                                src="https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/logo.png?1658680172137"
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className={cx('c-7')}>
                        <ul className={cx('nav')}>
                            {
                                Directions.map((direct, index) => {
                                    if (direct.id == 3) {
                                        return (
                                            <li key={index}>
                                                <Tippy
                                                    render={attrs => (
                                                        <div className={cx("product-kinds")} tabIndex="-1" {...attrs}>
                                                            {
                                                                productKind.map((prod, index) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            <ProductKind to={prod.path}>
                                                                                {prod.kind_name}
                                                                            </ProductKind>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )}
                                                    placement='bottom-start'
                                                    interactive
                                                >
                                                    <NavLink to={direct.path}
                                                        className={(nav) => {
                                                            return cx('nav-item', {
                                                                active: nav.isActive
                                                            })
                                                        }}
                                                    >
                                                        {direct.name} <span> <FontAwesomeIcon icon={faCaretDown} /> </span>
                                                    </NavLink>
                                                </Tippy>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={index}>
                                            <Direct
                                                children={direct.name}
                                                path={direct.path}
                                                NavLink={NavLink}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={cx('c-3')}>
                        <ul className={cx('cart-group')}>
                            <li className={cx('search-btn')}>
                                <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} Search={Search}>
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                </SearchBlock>
                            </li>
                            <li>
                                {
                                    login ? (
                                        <>

                                        </>
                                    ) : (
                                        <Login >
                                            <div>
                                                <FontAwesomeIcon icon={faUserPlus} />
                                            </div>
                                        </Login>
                                    )
                                }
                            </li>
                            <li>
                                <ShoppingCart ListProduct={cart} removeCart={removeCart}>
                                    <Link to={routes.cart} cart={cart}>
                                        <div className={cx('cart-shopping')}>
                                            <FontAwesomeIcon icon={faBasketShopping} />
                                            <div className={cx('cart-size')}>
                                                {cart.length}
                                            </div>
                                        </div>
                                    </Link>
                                </ShoppingCart>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
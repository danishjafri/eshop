import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import StoreFrontIcon from '@mui/icons-material/Storefront'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <StoreFrontIcon fontSize='large' className='header-logo-image' />
                <h2 className="header-logo-title">eShop</h2>
            </div>
            <div className='header-search'>
                <input type='text' className='header-search-input' />
                <SearchIcon className='header-search-icon' />
            </div>
            <div className='header-nav'>
                <div className='nav-item'>
                    <span className='nav-item-line-one'>Helo Guest</span>
                    <span className='nav-item-line-two'>Sign In</span>
                </div>
                <div className='nav-item'>
                    <span className='nav-item-line-one'>Your</span>
                    <span className='nav-item-line-two'>Shop</span>
                </div>
                <div className='nav-item-basket'>
                    <ShoppingBasketIcon />
                    <span className='nav-item-line-two nav-basket-count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header

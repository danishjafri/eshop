import React from 'react'
import './Product.css'

import StarIcon from '@mui/icons-material/Star'

const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="product">
            <div className="product-info">
                <p>
                    {title}
                </p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {
                        Array(rating).fill().map((_, counter) => {
                            return <StarIcon id={counter} className='star-icon' />
                        })
                    }
                </div>
            </div>

            <img src={image} alt="product" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
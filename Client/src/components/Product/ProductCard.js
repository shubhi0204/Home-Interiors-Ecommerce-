import React from 'react'
import { Link } from 'react-router-dom';
import "./productCard.css";
import { Rating } from '@mui/material';

 
const ProductCard = ({product}) => {

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };


  return (
    <Link className='productCard' to={`/product/${product._id}`}>
      
              {/* <a href="/collections/designer-tables?ptm_source=small_banners">  */}
              {/* <a href="/collections/designer-tables"> </a> */}
              {/* <div className=""> */}
                {/* <a href="/collections/designer-tables"> */}
                  <img
                    style={{minHeight: "162px"}}
                    src={product.images[0]?.url}
                    alt={product.name}
                  />
                {/* </a> */}
                {/* <div> */}
                <p>{product.name}</p>
                <div>
                  <Rating {...options} /> <span className='productCardSpan'> ({product.numOfReviews} Reviews) </span>
                </div>
                <span>{`₹${product.price}`}</span>
                  {/* <a href="/collections/designer-tables"> */}
                    {/* <span>Upto 25% off on Beautiful Tables</span> */}
                     {/* <a href="/collections/designer-tables?ptm_source=small_banners" className="button">Shop Now</a>  */}
                     {/* </a> */}
                     {/* <a href="/collections/designer-tables" className="button">Shop Now</a> */}
                {/* </div> */}
              {/* </div> */}
            
    </Link>       
  )
}

export default ProductCard;

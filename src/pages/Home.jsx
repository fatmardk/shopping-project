import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar";
import Cart from "./Cart";


const Home = ({counts, setCounts}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?id=10");

      if (!response.ok) throw new Error("Failed to fetch products.");

      const result = await response.json();

      const first10Products = [...result.products.slice(4, 30)];

      setProducts(first10Products);
    } catch (error) {
      console.error(error);
    }
  };
  const addCart = (productId,productName,productPrice) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
      [productName]:productPrice
      // [productName]:productPrice
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className='slick-prev'>Prev</button>,
    nextArrow: <button className='slick-next'>Next</button>,
  };


  return (
    <div>
      {/* <Navbar /> */}
      
      <div id='all'>
        {products.map((product) => (
          <div key={product.id} className='block'>
            <div className='product-title'>{product.title}</div>
            <div className='product-description'>{product.description}</div>
            <div className='slider-container'>
              <Slider {...settings}>
                {product.images.map((image, imgIndex) => (
                  <div key={imgIndex} className='slide'>
                    <img src={image} alt={product.title} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className='d-flex'>
              <div>
                <div className="title">{product.title}</div>
                <div>{product.price}$</div>
              </div>
            </div>
            <div>
            <div className='cart' onClick={() => addCart(product.id,product.title,product.price)}>
              <div className="add-cart-container">
                <p className="add-text">Add to Cart</p>
                <div className='count'>{counts[product.id] || 0}</div>
              </div>
            </div>
          </div>

            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
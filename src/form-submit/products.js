import React, { useEffect, useState } from "react";
import "./products.css";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
 const [loading, setLoading]=useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
      });
  }, []);

  if(loading){
    return(
        <div>Loading......</div>
    )
  }
  return (
    <div className="button-container">
      <div className="post-product">
        <Link className="button" to={"/posts"}>
          posts
        </Link>
        <Link className="button" to={"/products"}>
          products
        </Link>
      </div>
      <div className="product-container">
        {products.length > 0
          ? products.map((result) => (

              <div className="products" key={result.id}>
            
                <h3>{result.title}</h3>
                <h3>{result.description}</h3>
                <h3>{result.price}</h3>
                
                <h3>{result.rating}</h3>
                <h3>{result.stock}</h3>
                <h3>{result.brand}</h3>
                <h3>{result.category}</h3>
             
             
                <div className="image-container">
                  {result.images.map((img) => (
                    <img src={img} className="image" />
                  ))}
                </div>
                <div className="detail-button">
                <button className="button-detail">
                <Link style={{color: "white", textDecoration: 'none', textTransform: 'uppercase'}} to={`${result.id}`}>detail</Link>
                </button>

                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
  
}
export default Products;

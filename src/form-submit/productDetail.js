import react, { useEffect, useState } from "react";
import React from "react";
import "./productDetail.css";
import { Link, Navigate, Route, useNavigate, useParams } from "react-router-dom";

function Productdetail() {
  const [product, setProductDetail] = useState({});
  const [loading, setLoading]  = useState(false)

  const {productid}=useParams()


  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${productid}`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false)
        setProductDetail(result);
      });
  }, []);



  if(loading){
    return(
        <div>Loading......</div>
    )
  }

  return (
      <div className="products" key={product.id}>
       
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>

        <h3>{product.rating}</h3>
        <h3>{product.stock}</h3>
        <h3>{product.brand}</h3>
        <h3>{product.category}</h3>

        <div className="image-container">
            {
                product && product.images && 
                product.images.map((img, index) => (
                    <img src={img} className="image" key={index} />
                  ))
            }
         
         </div>
      </div>
  );
}
export default Productdetail;

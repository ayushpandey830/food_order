import React, { useState } from "react";
import "./Foodcard.css";


const Foodcard=({rating,image,title,quantity,cost}) => {
  const [heart,setHeart] = useState(false);


  return (
    <div className="product">
      <div className="rating">
        <p>🌟 {rating}</p>
        <p className="heart" onClick={()=>setHeart((prevstate)=> 
          !prevstate)}>
          {heart? "🧡":"🤍"}</p>
      </div>

      <img src={image} alt="no" />

      <div className="title">
        <div> {title} </div>
        <div className="quantity">{quantity}</div>
      </div>

      <div className="cost">
        <strong>${cost}</strong>
        <button className="button">Add</button>
      </div>
    </div>
  ); 


}

export default Foodcard;

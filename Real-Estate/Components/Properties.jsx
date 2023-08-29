import React from "react";
import Bproperty from "./Bproperty";
import primage1 from "../images/prop1.png";
import primage2 from "../images/prop2.png";



function Properties(onsearch) {
  return (
    <div className="product">
      <div className="p-heading">
        <h3>Properties</h3>
        <p>This are the properties which are availabe for sell.</p>
      </div>
      

      <div className="product-container">
        <Bproperty image={primage1} name="Krishna Villa" price="$6000000" />
        <Bproperty image={primage2} name="Mansion" price="$250000" />
        
      </div>
    </div>
  );
}

export default Properties;

import React from "react";
import Card from "./Card";
import shoes from "../../assets/shoeData";

import "./Card.css";
import "./ShoeList.css";

const ShoesList = () => {
  return (
    <div className="shoes-list">
      {shoes.map((shoe, index) => (
        <Card
          key={index}
          title={shoe.title}
          price={shoe.price}
          mrp={shoe.mrp}
          discount={shoe.discount}
          category={shoe.category}
          color={shoe.color}
          imageUrl={shoe.imageUrl}
          hoverImageUrl={shoe.hoverImageUrl}
        />
      ))}
    </div>
  );
};

export default ShoesList;

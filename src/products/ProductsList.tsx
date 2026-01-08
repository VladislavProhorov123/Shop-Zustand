import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { product } from "../data/data";

export default function ProductsList({filteredProducts}) {
  
  return (
    <div className="flex flex-wrap gap-7 ">
      {filteredProducts.map((prod) => (
        <ProductCard
          key={prod.id}
          title={prod.title}
          id={prod.id}
          price={prod.price}
        />
      ))}
    </div>
  );
}

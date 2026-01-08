import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { product } from "../data/data";
import { useFilterStore } from "../store/filter-store";

export default function ProductsList() {
  const {
    searchTerm,
    category,
    selectedBrand,
    minPrice,
    maxPrice,
    minRating,
    showInStockOnly,
  } = useFilterStore();

  const filteredProducts = product
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => selectedBrand === "All" || p.brand === selectedBrand)
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .filter((p) => p.rating >= minRating)
    .filter((p) => !showInStockOnly || p.inStock);

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

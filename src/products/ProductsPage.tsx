import React, { useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";
import { product } from "../data/data";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("All");

  const categories = ["All", "Clothes", "Shoes", "Accessories"];

  const filteredProducts = product
    .filter((p) => p.category === category || category === "All")
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className={`flex-1  flex flex-col p-4 `}>
      <ProductsHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <ProductsList filteredProducts={filteredProducts} />
    </section>
  );
}

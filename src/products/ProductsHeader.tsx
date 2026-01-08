import React, { useState } from "react";
import {
  useCategory,
  useSearchTerm,
  useSetCategory,
  useSetSearchTerm,
} from "../store/filter-store";

export default function ProductsHeader() {
  const searchTerm = useSearchTerm();
  const setSearchTerm = useSetSearchTerm();

  const category = useCategory();
  const setCategory = useSetCategory();

  return (
    <div className="mb-6 flex items-center justify-between rounded-xl bg-[var(--color-bg-alt)] px-5 py-4 shadow-sm text-[var(--color-text-primary)]">
      <input
        className="border-none outline-none"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />

      <div className="flex gap-3">

      {["All", "Clothes", "Shoes"].map((cat) => (
        <button
          className="bg-[var(--color-btn-bg)] hover:bg-purple-600 text-white w-18 h-8 rounded-md cursor-pointer"
          key={cat}
          onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
      </div>
    </div>
  );
}

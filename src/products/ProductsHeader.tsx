import React, { useState } from "react";

export default function ProductsHeader({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-xl bg-[var(--color-bg-alt)] px-5 py-4 shadow-sm text-[var(--color-text-primary)]">
      <input
        className="border-none outline-none"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />

      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            className="bg-[var(--color-btn-bg)] hover:bg-purple-600 text-white w-18 h-8 rounded-md cursor-pointer"
            key={cat}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

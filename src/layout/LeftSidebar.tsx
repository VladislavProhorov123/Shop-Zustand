import { ArrowBigLeftDashIcon, ArrowBigRightDash } from "lucide-react";
import React from "react";
import {
  useMaxPrice,
  useMinPrice,
  useMinRating,
  useResetFilters,
  useSelectedBrand,
  useSetInStockOnly,
  useSetMaxPrice,
  useSetMinPrice,
  useSetMinRating,
  useSetSelectedBrand,
  useShowInStockOnly,
} from "../store/filter-store";

interface LeftSidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function LeftSidebar({ isOpen, toggle }: LeftSidebarProps) {
  const selectedBrand = useSelectedBrand();
  const setBrand = useSetSelectedBrand();

  const minPrice = useMinPrice();
  const setMinPrice = useSetMinPrice();

  const maxPrice = useMaxPrice();
  const setMaxPrice = useSetMaxPrice();

  const minRating = useMinRating();
  const setMinRating = useSetMinRating();

  const showInStockOnly = useShowInStockOnly();
  const setShowInStockOnly = useSetInStockOnly();

  const resetFilters = useResetFilters();

  return (
    <aside
      className={`text-[var(--color-text-primary)] h-full 
    bg-[var(--color-bg-alt)] 
    shadow-lg p-4 rounded-r-lg
    transition-all duration-300 ${
      isOpen ? "w-[220px]" : "w-[50px]"
    } overflow-hidden`}
    >
      {isOpen ? (
        <>
          <div className="flex items-start justify-between mb-5">
            <h3 className="text-[var(--color-text-primary)] text-2xl font-semibold">
              Filters
            </h3>
            <button onClick={toggle}>
              <ArrowBigLeftDashIcon stroke="var(--color-accent)" />
            </button>
          </div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide uppercase text-[var(--color-text-secondary)]">
            Brand
          </h4>
          {["All", "Nike", "Adidas", "Puma"].map((brand) => (
            <label className="group flex items-center gap-3 cursor-pointer rounded-md px-2 py-1.5 transition hover:bg-[var(--color-bg-hover)]">
              <input
                type="radio"
                checked={selectedBrand === brand}
                onChange={() => setBrand(brand)}
                className="sr-only"
              />

              <span className="h-4 w-4 rounded-full border border-[var(--color-border)] flex items-center justify-center transition  group-hover:border-[var(--color-accent)]">
                <span
                  className={`
        h-2.5 w-2.5
        rounded-full
        bg-[var(--color-accent)]
        transition
        ${selectedBrand === brand ? "scale-100" : "scale-0"}
      `}
                />
              </span>

              <span className="text-sm text-[var(--color-text-primary)]">
                {brand}
              </span>
            </label>
          ))}

          <h4 className="mb-3 mt-3 text-sm font-semibold tracking-wide uppercase text-[var(--color-text-secondary)]">
            Price
          </h4>
          <div className="flex gap-2">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min"
              className="
      w-20
      rounded-md
      border
      border-[var(--color-border)]
      bg-[var(--color-bg-alt)]
      px-3 py-1.5
      text-sm
      text-[var(--color-text-primary)]
      outline-none
      transition
      focus:border-[var(--color-accent)]
      focus:ring-1
      focus:ring-[var(--color-accent)]/40
    "
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="Max"
              className="
      w-20
      rounded-md
      border
      border-[var(--color-border)]
      bg-[var(--color-bg-alt)]
      px-3 py-1.5
      text-sm
      text-[var(--color-text-primary)]
      outline-none
      transition
      focus:border-[var(--color-accent)]
      focus:ring-1
      focus:ring-[var(--color-accent)]/40
    "
            />
          </div>

          <h4 className="mb-3 mt-3 text-sm font-semibold tracking-wide uppercase text-[var(--color-text-secondary)]">
            Rating
          </h4>
          <input
            type="number"
            min={0}
            max={5}
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-24
    rounded-md
    border
    border-[var(--color-border)]
    bg-[var(--color-bg-alt)]
    px-3 py-1.5
    text-sm
    text-[var(--color-text-primary)]
    outline-none
    transition
    focus:border-[var(--color-accent)]
    focus:ring-1
    focus:ring-[var(--color-accent)]/40"
          />

          <div className="flex items-center gap-2 mb-3 mt-3">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[var(--color-text-secondary)]">
              In Stock Only
            </h4>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showInStockOnly}
                onChange={(e) => setShowInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-[var(--color-accent)] rounded"
              />
            </label>
          </div>
          <button
            onClick={resetFilters}
            className="px-4 py-2 mt-3 text-sm font-semibold text-white bg-[var(--color-accent)] rounded hover:bg-[var(--color-border-accent)] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </>
      ) : (
        <button onClick={toggle}>
          <ArrowBigRightDash stroke="var(--color-accent)" />
        </button>
      )}
    </aside>
  );
}

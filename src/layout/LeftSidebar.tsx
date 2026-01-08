import { ArrowBigLeftDashIcon, ArrowBigRightDash } from "lucide-react";
import React from "react";
import {
  useMaxPrice,
  useMinPrice,
  useMinRating,
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
        <div className="flex items-start">
          <p>LEFT SIDEBAR (FILTERS)</p>
          <button onClick={toggle}>
            <ArrowBigLeftDashIcon stroke="var(--color-accent)" />
          </button>
        </div>

          {["All", "Nike", "Adidas", "Puma"].map((brand) => (
            <label htmlFor="">
              <input
                type="radio"
                checked={selectedBrand === brand}
                onChange={() => setBrand(brand)}
              />
              {brand}
            </label>
          ))}

          <h4>Price</h4>
          <div className="flex gap-2">
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Min" className="border p-1 w-20" />
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Max" className="border p-1 w-20" />
          </div>

          <h4>Rating</h4>
          <input type="number" min={0} max={5} value={minRating} onChange={(e) => setMinRating(Number(e.target.value))} className="border p-1 w-20" />

          <h4>In Stock Only</h4>
          <label htmlFor="">
            <input type="checkbox" checked={showInStockOnly} onChange={(e) => setShowInStockOnly(e.target.checked)} />
          </label>
        </>
      ) : (
        <button onClick={toggle}>
          <ArrowBigRightDash stroke="var(--color-accent)" />
        </button>
      )}
    </aside>
  );
}

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
          <p>LEFT SIDEBAR (FILTERS)</p>
          <button onClick={toggle}>
            <ArrowBigLeftDashIcon stroke="var(--color-accent)" />
          </button>

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
        </>
      ) : (
        <button onClick={toggle}>
          <ArrowBigRightDash stroke="var(--color-accent)" />
        </button>
      )}
    </aside>
  );
}

import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import React, { useState } from "react";
import Cart from "./Cart";
import Favorites from "./Favorites";

interface RightSidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

type Tab = "cart" | "favorites";

export default function RightSidebar({ isOpen, toggle }: RightSidebarProps) {
  const [activeTab, setActiveTab] = useState<Tab>("cart");
  return (
    <aside
      className={` h-full 
    bg-[var(--color-surface)] border-r border-[var(--color-border)]
    shadow-lg p-4 rounded-r-lg
    transition-all duration-300
 ${isOpen ? "w-[360px]" : "w-[50px]"} overflow-hidden`}
    >
      {isOpen ? (
        <>
          <div className="flex items-center  justify-between">
            <div className=" cursor-pointer">
              <button onClick={toggle} className="cursor-pointer">
                <ArrowBigRightDash stroke="var(--color-accent)" />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-md bg-[var(--color-btn-bg)] text-[var(--color-btn-text)] cursor-pointer font-medium shadow-sm hover:bg-purple-600 transition-colors duration-200 border border-transparent"
                onClick={() => setActiveTab("cart")}
              >
                CART
              </button>

              <button
                className="px-4 py-2 rounded-md bg-[var(--color-btn-bg)] cursor-pointer text-[var(--color-btn-text)] font-medium shadow-sm hover:bg-purple-600 transition-colors duration-200 border border-transparent"
                onClick={() => setActiveTab("favorites")}
              >
                FAVORITES
              </button>
            </div>
          </div>
          <div className="">
            {activeTab === "cart" && <Cart />}
            {activeTab === "favorites" && <Favorites />}
          </div>
        </>
      ) : (
        <button onClick={toggle}>
          <ArrowBigLeftDash />
        </button>
      )}
    </aside>
  );
}

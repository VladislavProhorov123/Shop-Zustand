import React from "react";
import {
  useCart,
  useDecreaseQuantity,
  useIncreaseQuantity,
  useRemoveFromCart,
} from "../store/cart-store";

export default function Cart() {
  const cart = useCart();
  const removeFromCart = useRemoveFromCart();
  const increaseQuantity = useIncreaseQuantity();
  const decreaseQuantity = useDecreaseQuantity();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h1 className="flex justify-center mt-5 mb-5 text-[var(--color-text-primary)] text-2xl font-semibold">
        CART
      </h1>
      {cart.length === 0 ? (
        <p className="p-4 bg-[var(--color-surface)] rounded-md shadow-sm border border-[var(--color-border)] text-[var(--color-text-secondary)] text-center">Your cart is empty...</p>
      ) : (
        <div className="overflow-y-auto max-h-[500px] items-center ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 mb-3 bg-[var(--color-surface)] rounded-md shadow-sm border border-[var(--color-border)]"
            >
              <div className="flex-1">
                <span className="text-[var(--color-text-primary)] font-medium">
                  {item.title}
                </span>
                <span className="text-[var(--color-text-secondary)] ml-2">
                  ${item.price}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 rounded-md bg-gray-200 text-[var(--color-text-primary)] hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-2 text-[var(--color-text-primary)]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 rounded-md bg-gray-200 text-[var(--color-text-primary)] hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 px-3 py-1 bg-[var(--color-accent)] text-white rounded-md hover:bg-purple-700 transition"
              >
                REMOVE
              </button>
            </div>
          ))}
          <p className="p-4 bg-[var(--color-surface)] rounded-md shadow-sm border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold ">
            <strong className="text-[var(--color-accent)]">TOTAL PRICE: ${totalPrice}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

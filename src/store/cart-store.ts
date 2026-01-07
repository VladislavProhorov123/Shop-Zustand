import { create, type StateCreator } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"

export interface ICartItem {
  id: number
  title: string
  price: number
  quantity: number
}

interface ICartInitialState {
  cart: ICartItem[]
}

const initialCartState: ICartInitialState = {
  cart: []
}

interface ICartActions {
  addToCart: (item: ICartItem) => void
  removeFromCart: (id: number) => void 
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

interface ICartState extends ICartInitialState, ICartActions {}

const cartStore: StateCreator<ICartState> = (set) => ({
  cart: [],
  addToCart: (item: ICartItem) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  increaseQuantity: (id: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id: number) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
});

const useCartStore = create<ICartState>()(
  devtools(
    persist(cartStore, {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    })
  )
);

export const useCart = () => useCartStore((state) => state.cart);
export const useAddToCart = () => useCartStore((state) => state.addToCart);
export const useRemoveFromCart = () =>
  useCartStore((state) => state.removeFromCart);
export const useClearCart = () => useCartStore((state) => state.clearCart);
export const useIncreaseQuantity  = () => useCartStore(state => state.increaseQuantity)
export const useDecreaseQuantity = () => useCartStore(state => state.decreaseQuantity)

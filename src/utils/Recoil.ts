import { loadShoppingList, shoppingList } from "./ShoppingCart";
import { atom, selector } from "recoil";

export const shoppingCartState = atom<shoppingList[]>({
  key: "shoppingCart",
  default: loadShoppingList(),
});
export const shoppingCartCountState = selector({
  key: "shopingCartCount",
  get: ({ get }) => {
    const list = get(shoppingCartState);
    let count = 0;
    list.forEach((item) => (count += item.count));
    return count;
  },
});
export const shoppingCartTotalCostState = selector({
  key: "shoppingCartTotalCostState",
  get: ({ get }) => {
    const list = get(shoppingCartState);
    let total = 0;
    list.forEach((item) => (total += item.product.price * item.count));
    return total;
  },
});

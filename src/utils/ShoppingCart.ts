import myLocalStorage from "../hooks/useLocalStorage";
import { Product } from "../myTypes";

export type shoppingList = {
  count: number;
  product: Product;
};

export const CARTKEY = "shopping-cart";

export function loadShoppingList(): shoppingList[] {
  return myLocalStorage<shoppingList[]>(CARTKEY) ?? [];
}
export function saveShoppingList(list: shoppingList[]): shoppingList[] {
  myLocalStorage<shoppingList[]>(CARTKEY, list);
  return list;
}
export function addToCart(product: Product): shoppingList[] {
  const cart = loadShoppingList();
  const productInList = cart.find((item) => item.product.id === product.id);
  if (!productInList) {
    const newItem = { count: 1, product };
    const newCart = [...cart, newItem];
    saveShoppingList(newCart);
    return newCart;
  }
  const newItem: shoppingList = {
    count: productInList.count + 1,
    product: productInList.product,
  };
  const newCart = cart.filter(
    (item) => item.product.id !== product.id && item.count > 0,
  );
  newCart.push(newItem);
  saveShoppingList(newCart);
  return newCart;
}
export function removeFromCart(
  productId: number,
  reset: boolean = false,
): shoppingList[] {
  const cart = loadShoppingList();
  const found = cart.find((item) => item.product.id === productId);
  if (!found) {
    return cart;
  }

  const newCart = cart.filter((item) => item.product.id !== productId);
  if (reset || found.count == 1) {
    saveShoppingList(newCart);
    return newCart;
  }
  const newItem: shoppingList = {
    count: found.count - 1,
    product: found.product,
  };
  newCart.push(newItem);
  saveShoppingList(newCart);
  return newCart;
}

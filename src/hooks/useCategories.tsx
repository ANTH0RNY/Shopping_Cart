import useMyFetch, { FetchResults } from "./useMyFetch";
import { Categories } from "../myTypes";

export default function useCategories(): FetchResults<Categories[]> {
  const url = "https://fakestoreapi.com/products/categories";
  return useMyFetch<Categories[]>(url);
}

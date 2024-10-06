import useMyFetch from "../hooks/useMyFetch";
import { Categories, Product } from "../myTypes";
import Error from "./Error";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

type proptypes = {
  category: Categories;
};

export default function CategoryDisplay({ category }: proptypes) {
  const { data: products, loading, error } = useMyFetch<Product[]>(
    `https://fakestoreapi.com/products/category/${category}?limit=5`,
  );
  if (loading) {
    return <Loading />;
  }
  if (error) return <Error />;
  return (
    <div className="py-3 px-1 flex flex-col gap-3" id={`d-${category}`}>
      <div className="flex justify-between px-4">
        <span className="text-logo-green font-black capitalize underline decoration-logo-blue decoration-4 underline-offset-8 text-2xl">
          {category}
        </span>
        <span className="flex  items-center font-thin text-lg hover:underline decoration-logo-blue underline-offset-2 text-logo-blue">
          more
        </span>
      </div>
      {/*<hr className="h-[2px] bg-logo-blue"/>*/}
      <div className="flex flex-wrap items-center justify-between">
        {products &&
          products.map((p) => <ProductCard product={p} key={p.id} />)}
      </div>
    </div>
  );
}

import useCategories from "../hooks/useCategories";
import CategoryDisplay from "./CategoryDisplay";
import Error from "./Error";
import Loading from "./Loading";

export default function Shop() {
  const { data, error, loading } = useCategories();
  // console.log(data)
  if (error) return <Error />;
  if (loading) return <Loading />;
  return (
    <div className="px-3 py-2">
      <h2
        className="text-logo-blue text-4xl font-black underline decoration-logo-green decoration-4 underline-offset-4 mb-3"
        id="d-shopping-title"
      >
        Shop by Categories
      </h2>

      {data &&
        (
          <div className="flex flex-col gap-8">
            {data.map((cat, idx) => (
              <CategoryDisplay
                category={cat}
                key={idx}
              />
            ))}
          </div>
        )}
    </div>
  );
}

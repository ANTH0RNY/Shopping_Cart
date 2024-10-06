type propType = {
  value: number;
  incrimentHandler: () => void;
  decrimentHandler: () => void;
};

export default function QuantityAdjustor(
  { value, incrimentHandler, decrimentHandler }: propType,
) {
  return (
    <div className="flex gap-2  border border-logo-blue rounded items-stretch text-sm font-bold p-0">
      <button
        onClick={(_) => decrimentHandler()}
        className="font-black hover:bg-logo-blue hover:text-white m-0 flex-1 px-2 py-1"
      >
        &#8722;
      </button>
      <p className="flex-1 my-auto">{value}</p>
      <button
        onClick={(_) => incrimentHandler()}
        className="font-black hover:bg-logo-blue hover:text-white m-0 flex-1 px-2 py-1"
      >
        &#43;
      </button>
    </div>
  );
}

export default function Quantity({ quantity }) {
  return (
    <div
      className={`px-6 ${
        quantity == 0
          ? "bg-red-100 text-red-800"
          : quantity < 10
          ? "bg-amber-100 text-amber-800"
          : "bg-green-100 text-green-800"
      } rounded-full py-1`}
    >
        <p className="font-semibold">{quantity}</p>
    </div>
  );
}

export default function InputSelect({name, value, handleChange}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        City
      </label>
      <select
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="laayoune">Laayoune</option>
        <option value="rabat">Rabat</option>
        <option value="agadir">Agadir</option>
      </select>
    </div>
  );
}

export default function InputSelect({ name, value, handleChange, options }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        City
      </label>
      <select
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

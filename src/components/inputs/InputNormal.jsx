export default function InputNormal({
  name,
  type,
  label,
  value,
  handleChange,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          name={name}
          type={type}
          required
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

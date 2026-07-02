"use client";

export default function SelectField({
  label,
  name,
  register,
  options = [],
  error,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>

      <select
        id={name}
        {...register(name)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

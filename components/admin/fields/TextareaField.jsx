"use client";

export default function TextareaField({
  label,
  name,
  register,
  error,
  rows = 5,
  placeholder = "",
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>

      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

"use client";

export default function TextField({
  label,
  name,
  register,
  error,
  required = false,
  placeholder = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}

        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        {...props}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default function FormInput({
  label,
  register,
  name,
  type = "text",
  error,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="font-medium">{label}</label>

      <input
        type={type}
        {...register(name)}
        {...props}
        className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
      />

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

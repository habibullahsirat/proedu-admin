export default function FormTextarea({ label, register, name, error }) {
  return (
    <div className="space-y-2">
      <label className="font-medium">{label}</label>

      <textarea
        rows={5}
        {...register(name)}
        className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
      />

      {error && <p className="text-red-600 text-sm">{error.message}</p>}
    </div>
  );
}

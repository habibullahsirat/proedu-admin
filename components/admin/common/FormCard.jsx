export default function FormCard({ title, children }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {title && (
        <div className="border-b px-8 py-5">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      )}

      <div className="p-8">{children}</div>
    </div>
  );
}

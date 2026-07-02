export default function EmptyState({ title = "No data found" }) {
  return (
    <div className="rounded-xl border bg-white p-16 text-center">
      <p className="text-gray-500">{title}</p>
    </div>
  );
}

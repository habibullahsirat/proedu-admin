export default function EmptyState({ title = "No data found" }) {
  return (
    <div className="rounded-lg border border-dashed p-10 text-center text-gray-500">
      {title}
    </div>
  );
}

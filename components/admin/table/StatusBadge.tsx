export default function StatusBadge({ active }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm

      ${active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
}

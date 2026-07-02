"use client";

export default function EmptyState({ message = "No records found." }) {
  return (
    <div className="rounded-xl border bg-white py-16 text-center">
      <h2 className="text-lg font-semibold">{message}</h2>
    </div>
  );
}

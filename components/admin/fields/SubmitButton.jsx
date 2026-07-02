"use client";

export default function SubmitButton({ loading, text = "Save" }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Saving..." : text}
    </button>
  );
}

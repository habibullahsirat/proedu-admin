export default function SubmitButton({ loading, text }) {
  return (
    <button
      disabled={loading}
      className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
    >
      {loading ? "Saving..." : text}
    </button>
  );
}

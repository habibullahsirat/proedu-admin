"use client";

import { useRouter } from "next/navigation";

export default function FormActions({ loading, submitText = "Save" }) {
  const router = useRouter();

  return (
    <div className="flex gap-4 pt-6">
      <button
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Saving..." : submitText}
      </button>

      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-lg border px-6 py-3"
      >
        Cancel
      </button>
    </div>
  );
}

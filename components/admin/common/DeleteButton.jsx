"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton({ loading, onDelete }) {
  return (
    <button
      type="button"
      disabled={loading}
      onClick={onDelete}
      className="rounded-lg bg-red-600 px-3 py-2 text-white transition hover:bg-red-700 disabled:opacity-50"
    >
      <Trash2 size={18} />
    </button>
  );
}

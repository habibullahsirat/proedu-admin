"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

export default function ActionButtons({
  editHref,
  deleting = false,
  onDelete,
}) {
  return (
    <div className="flex justify-center gap-2">
      <Link
        href={editHref}
        className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        <Pencil size={18} />
      </Link>

      <button
        type="button"
        disabled={deleting}
        onClick={onDelete}
        className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700 disabled:opacity-50"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

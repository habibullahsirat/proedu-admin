"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="text-red-600">
      <Trash2 size={18} />
    </button>
  );
}

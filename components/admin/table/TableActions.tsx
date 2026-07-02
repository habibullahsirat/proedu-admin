"use client";

import Link from "next/link";

import { Pencil } from "lucide-react";

import DeleteButton from "./DeleteButton";

export default function TableActions({ editUrl, onDelete }) {
  return (
    <div className="flex gap-3">
      <Link href={editUrl}>
        <Pencil size={18} />
      </Link>

      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

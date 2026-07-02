"use client";

import Image from "next/image";
import { useRef } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function FormImageUpload({ value, onChange }) {
  const inputRef = useRef(null);

  async function handleUpload(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post("/api/upload", formData);

      onChange(data.data);

      toast.success("Image uploaded");
    } catch {
      toast.error("Upload failed");
    }
  }

  return (
    <div className="space-y-4">
      {value?.url && (
        <Image
          src={value.url}
          alt="Preview"
          width={250}
          height={160}
          className="rounded-lg border object-cover"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function ImageField({ value, onChange }) {
  const inputRef = useRef(null);

  const [uploading, setUploading] = useState(false);

  async function handleUpload(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);

      const { data } = await axios.post("/api/upload", formData);

      onChange(data.data);

      toast.success("Image uploaded");
    } catch (err) {
      console.error(err);

      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      {value?.url && (
        <Image
          src={value.url}
          alt="Preview"
          width={280}
          height={180}
          className="rounded-lg border object-cover"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {uploading && <p className="text-blue-600">Uploading...</p>}
    </div>
  );
}

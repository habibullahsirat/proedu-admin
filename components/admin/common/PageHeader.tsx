"use client";

import Link from "next/link";

export default function PageHeader({ title, buttonText, buttonLink }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>

      {buttonText && (
        <Link
          href={buttonLink}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}

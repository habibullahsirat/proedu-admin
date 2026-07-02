import Link from "next/link";

export default function PageHeader({ title, buttonText, href }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>

      <Link href={href} className="rounded-lg bg-blue-600 px-5 py-3 text-white">
        {buttonText}
      </Link>
    </div>
  );
}

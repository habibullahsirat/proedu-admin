"use client";

import EmptyState from "./EmptyState";

export default function DataTable({
  columns,
  data = [],
  loading = false,
  showIndex = true,
}) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        Loading...
      </div>
    );
  }

  if (!data.length) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            {showIndex && (
              <th className="px-4 py-4 text-left font-semibold">#</th>
            )}

            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-4 font-semibold ${
                  column.center ? "text-center" : "text-left"
                }`}
                style={{
                  width: column.width || "auto",
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={row._id} className="border-t hover:bg-gray-50">
              {showIndex && <td className="px-4 py-4">{index + 1}</td>}

              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`px-4 py-4 ${column.center ? "text-center" : ""}`}
                >
                  {column.render ? column.render(row, index) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

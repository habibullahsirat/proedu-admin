"use client";

export default function DataTable({ columns, children }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-gray-50">
            {columns.map((column) => (
              <th key={column} className="p-4 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

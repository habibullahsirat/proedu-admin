export default function DataTable({ columns, data }) {
  return (
    <div className="overflow-auto rounded-xl border bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-gray-100">
            {columns.map((column) => (
              <th key={column.key} className="p-4 text-left">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row._id} className="border-b">
              {columns.map((column) => (
                <td key={column.key} className="p-4">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

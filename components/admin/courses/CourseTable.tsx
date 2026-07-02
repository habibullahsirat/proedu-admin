"use client";

import Image from "next/image";

import DataTable from "../table/DataTable";
import TableActions from "../table/TableActions";

export default function CourseTable({ courses, onDelete }) {
  const columns = [
    {
      key: "image",

      title: "Image",

      render: (row) => (
        <Image
          src={row.image.url}
          alt={row.title}
          width={70}
          height={50}
          className="rounded"
        />
      ),
    },

    {
      key: "title",

      title: "Title",

      render: (row) => row.title,
    },

    {
      key: "price",

      title: "Price",

      render: (row) => `$${row.price}`,
    },

    {
      key: "actions",

      title: "Actions",

      render: (row) => (
        <TableActions
          editUrl={`/admin/courses/${row._id}`}
          onDelete={() => onDelete(row._id)}
        />
      ),
    },
  ];

  return <DataTable columns={columns} data={courses} />;
}

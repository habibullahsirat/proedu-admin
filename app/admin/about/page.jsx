"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import PageHeader from "@/components/admin/common/PageHeader";
import Loading from "@/components/admin/common/Loading";
import DataTable from "@/components/admin/common/DataTable";

import { getAbouts, deleteAbout } from "@/services/aboutService";

export default function AboutPage() {
  const [abouts, setAbouts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbouts();
  }, []);

  async function loadAbouts() {
    try {
      const data = await getAbouts();

      setAbouts(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load About");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this About section?")) return;

    try {
      await deleteAbout(id);

      toast.success("About deleted");

      loadAbouts();
    } catch (err) {
      console.error(err);

      toast.error("Delete failed");
    }
  }

  if (loading) {
    return <Loading />;
  }

  const columns = [
    {
      header: "Image",

      render: (item) => (
        <Image
          src={item.image.url}
          alt={item.title}
          width={80}
          height={50}
          className="rounded object-cover"
        />
      ),
    },

    {
      header: "Title",

      accessor: "title",
    },

    {
      header: "Button",

      accessor: "buttonText",
    },

    {
      header: "Status",

      render: (item) => (
        <span
          className={`rounded px-2 py-1 text-xs font-medium ${
            item.isActive
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {item.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      header: "Actions",

      render: (item) => (
        <div className="flex gap-3">
          <Link
            href={`/admin/about/${item._id}/edit`}
            className="text-blue-600"
          >
            Edit
          </Link>

          <button
            onClick={() => handleDelete(item._id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="About"
        buttonText="Create About"
        buttonLink="/admin/about/create"
      />

      <DataTable columns={columns} data={abouts} />
    </>
  );
}

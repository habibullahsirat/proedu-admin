"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import Loading from "@/components/admin/common/Loading";
import PageHeader from "@/components/admin/common/PageHeader";
import DataTable from "@/components/admin/common/DataTable";
import StatusBadge from "@/components/admin/common/StatusBadge";
import ActionButtons from "@/components/admin/common/ActionButtons";

import { getHeroes, deleteHero } from "@/services/heroService";

export default function HeroPage() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadHeroes();
  }, []);

  async function loadHeroes() {
    try {
      const data = await getHeroes();

      setHeroes(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load heroes");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this hero?")) return;

    try {
      setDeletingId(id);

      await deleteHero(id);

      setHeroes((prev) => prev.filter((hero) => hero._id !== id));

      toast.success("Hero deleted");
    } catch (err) {
      console.error(err);

      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  }

  const columns = [
    {
      key: "image",
      title: "Image",
      render: (hero) => (
        <Image
          src={hero.image.url}
          alt={hero.title}
          width={90}
          height={60}
          className="rounded-lg object-cover"
        />
      ),
    },

    {
      key: "title",
      title: "Title",
    },

    {
      key: "buttonText",
      title: "Button",
    },

    {
      key: "status",
      title: "Status",
      render: (hero) => <StatusBadge active={hero.isActive} />,
    },

    {
      key: "actions",
      title: "Actions",
      render: (hero) => (
        <ActionButtons
          editHref={`/admin/hero/${hero._id}/edit`}
          deleting={deletingId === hero._id}
          onDelete={() => handleDelete(hero._id)}
        />
      ),
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader
        title="Hero"
        buttonText="Add Hero"
        buttonLink="/admin/hero/create"
      />

      <DataTable columns={columns} data={heroes} />
    </>
  );
}

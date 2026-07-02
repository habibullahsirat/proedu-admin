"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import Loading from "@/components/admin/common/Loading";
import PageHeader from "@/components/admin/common/PageHeader";

import HeroForm from "@/components/admin/hero/HeroForm";

import { getHero, updateHero } from "@/services/heroService";

export default function EditHeroPage() {
  const { id } = useParams();

  const router = useRouter();

  const [hero, setHero] = useState(null);

  useEffect(() => {
    loadHero();
  }, []);

  async function loadHero() {
    try {
      const data = await getHero(id);

      setHero(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load hero");
    }
  }

  async function handleUpdate(values) {
    try {
      await updateHero(id, values);

      toast.success("Hero updated");

      router.push("/admin/hero");
    } catch (err) {
      console.error(err);

      toast.error("Update failed");
    }
  }

  if (!hero) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader title="Edit Hero" />

      <HeroForm
        title="Edit Hero"
        initialValues={hero}
        onSubmit={handleUpdate}
      />
    </>
  );
}

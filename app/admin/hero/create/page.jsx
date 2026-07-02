"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import HeroForm from "@/components/admin/hero/HeroForm";
import PageHeader from "@/components/admin/common/PageHeader";

import { createHero } from "@/services/heroService";

export default function CreateHeroPage() {
  const router = useRouter();

  async function handleCreate(values) {
    await createHero(values);

    toast.success("Hero created successfully");

    router.push("/admin/hero");
  }

  return (
    <>
      <PageHeader title="Create Hero" button={false} />

      <HeroForm title="Create Hero" onSubmit={handleCreate} />
    </>
  );
}

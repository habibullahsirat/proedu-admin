"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import PageHeader from "@/components/admin/common/PageHeader";
import AboutForm from "@/components/admin/about/AboutForm";

import { createAbout } from "@/services/aboutService";

export default function CreateAboutPage() {
  const router = useRouter();

  async function handleCreate(values) {
    try {
      await createAbout(values);

      toast.success("About created");

      router.push("/admin/about");
    } catch (err) {
      console.error(err);

      toast.error("Create failed");
    }
  }

  return (
    <>
      <PageHeader title="Create About" />

      <AboutForm title="Create About" onSubmit={handleCreate} />
    </>
  );
}

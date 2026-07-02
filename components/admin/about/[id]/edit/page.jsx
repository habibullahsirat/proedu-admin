"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import Loading from "@/components/admin/common/Loading";
import PageHeader from "@/components/admin/common/PageHeader";

import AboutForm from "@/components/admin/about/AboutForm";

import { getAbout, updateAbout } from "@/services/aboutService";

export default function EditAboutPage() {
  const { id } = useParams();

  const router = useRouter();

  const [about, setAbout] = useState(null);

  useEffect(() => {
    loadAbout();
  }, []);

  async function loadAbout() {
    try {
      const data = await getAbout(id);

      setAbout(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load About");
    }
  }

  async function handleUpdate(values) {
    try {
      await updateAbout(id, values);

      toast.success("About updated");

      router.push("/admin/about");
    } catch (err) {
      console.error(err);

      toast.error("Update failed");
    }
  }

  if (!about) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader title="Edit About" />

      <AboutForm
        title="Edit About"
        initialValues={about}
        onSubmit={handleUpdate}
      />
    </>
  );
}

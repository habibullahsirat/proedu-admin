"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import PageHeader from "@/components/admin/common/PageHeader";
import CourseForm from "@/components/admin/courses/CourseForm";

import { createCourse } from "@/services/courseService";

export default function CreateCoursePage() {
  const router = useRouter();

  async function handleCreate(values) {
    await createCourse(values);

    toast.success("Course created successfully");

    router.push("/admin/courses");
  }

  return (
    <>
      <PageHeader title="Create Course" button={false} />

      <CourseForm title="Create Course" onSubmit={handleCreate} />
    </>
  );
}

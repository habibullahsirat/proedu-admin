"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import PageHeader from "@/components/admin/common/PageHeader";
import Loading from "@/components/admin/common/Loading";

import CourseForm from "@/components/admin/courses/CourseForm";

import { getCourse, updateCourse } from "@/services/courseService";

export default function EditCoursePage() {
  const { id } = useParams();

  const router = useRouter();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getCourse(id);

      setCourse(data);
    }

    load();
  }, [id]);

  async function handleUpdate(values) {
    await updateCourse(id, values);

    toast.success("Course updated");

    router.push("/admin/courses");
  }

  if (!course) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader title="Edit Course" button={false} />

      <CourseForm
        title="Edit Course"
        initialValues={course}
        onSubmit={handleUpdate}
      />
    </>
  );
}

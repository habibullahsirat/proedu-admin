"use client";

import { toast } from "sonner";

import PageHeader from "@/components/admin/common/PageHeader";
import Loading from "@/components/admin/common/Loading";
import Error from "@/components/admin/common/Error";
import EmptyState from "@/components/admin/common/EmptyState";

import CourseTable from "@/components/admin/courses/CourseTable";

import useCourses from "@/hooks/useCourses";

import { deleteCourse } from "@/services/admin/courseService";

export default function CoursesPage() {
  const { courses, loading, error, refresh } = useCourses();

  async function handleDelete(id) {
    if (!confirm("Delete this course?")) {
      return;
    }

    try {
      await deleteCourse(id);

      toast.success("Course deleted");

      refresh();
    } catch {
      toast.error("Delete failed");
    }
  }

  return (
    <>
      <PageHeader
        title="Courses"
        buttonText="Add Course"
        href="/admin/courses/new"
      />

      {loading && <Loading />}

      {error && <Error message={error} />}

      {!loading && courses.length === 0 && (
        <EmptyState title="No courses found" />
      )}

      {!loading && courses.length > 0 && (
        <CourseTable courses={courses} onDelete={handleDelete} />
      )}
    </>
  );
}

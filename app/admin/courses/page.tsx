"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import PageHeader from "@/components/admin/common/PageHeader";
import Loading from "@/components/admin/common/Loading";
import EmptyState from "@/components/admin/common/EmptyState";
// Fallback DataTable component in case the original module is missing
function DataTable({
  columns,
  children,
}: {
  columns: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="text-left p-4 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y">{children}</tbody>
      </table>
    </div>
  );
}

import { getCourses, deleteCourse } from "@/services/courseService";

export default function CoursesPage() {
  const [courses, setCourses] = useState(null);

  async function loadCourses() {
    const data = await getCourses();
    setCourses(data);
  }

  useEffect(() => {
    loadCourses();
  }, []);

  async function handleDelete(id) {
    const ok = window.confirm("Delete this course?");

    if (!ok) return;

    await deleteCourse(id);

    toast.success("Course deleted");

    loadCourses();
  }

  if (!courses) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader
        title="Courses"
        buttonText="Create Course"
        buttonLink="/admin/courses/create"
      />

      {courses.length === 0 ? (
        <EmptyState title="No Courses Found" />
      ) : (
        <DataTable columns={["Title", "Price", "Created", "Actions"]}>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className="p-4">{course.title}</td>

              <td className="p-4">${course.price}</td>

              <td className="p-4">
                {new Date(course.createdAt).toLocaleDateString()}
              </td>

              <td className="space-x-3 p-4">
                <Link
                  href={`/admin/courses/${course._id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(course._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </DataTable>
      )}
    </>
  );
}

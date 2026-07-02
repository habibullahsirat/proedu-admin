"use client";

import { useEffect, useState } from "react";
import { getCourses } from "@/services/admin/courseService";

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadCourses() {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    refresh: loadCourses,
  };
}

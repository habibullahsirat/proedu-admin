"use client";

import { useEffect, useState } from "react";
import { getDashboard } from "@/services/admin/dashboardService";

export default function useDashboard() {
  const [statistics, setStatistics] = useState(null);
  const [recentCourses, setRecentCourses] = useState([]);
  const [recentStudents, setRecentStudents] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getDashboard();

        setStatistics(data.statistics);
        setRecentCourses(data.recentCourses);
        setRecentStudents(data.recentStudents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    statistics,
    recentCourses,
    recentStudents,
    loading,
    error,
  };
}

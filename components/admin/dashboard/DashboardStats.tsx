// "use client";

// import { useEffect, useState } from "react";

// import api from "@/lib/admin/api";

// import Loading from "../common/Loading";
// import Error from "../common/Error";

// import StatCard from "./StatCard";

// import {
//   BookOpen,
//   Users,
//   GraduationCap,
//   Building2,
//   MessageSquare,
// } from "lucide-react";

// export default function DashboardStats() {
//   const [data, setData] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await api.get("/admin/dashboard");

//         setData(res.data.data.statistics);
//       } catch (err) {
//         setError(err.message);
//       }

//       setLoading(false);
//     }

//     load();
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error) {
//     return <Error message={error} />;
//   }

//   return (
//     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
//       <StatCard title="Courses" value={data.totalCourses} icon={BookOpen} />

//       <StatCard
//         title="Instructors"
//         value={data.totalInstructors}
//         icon={Users}
//       />

//       <StatCard
//         title="Students"
//         value={data.totalStudents}
//         icon={GraduationCap}
//       />

//       <StatCard
//         title="Reviews"
//         value={data.totalReviews}
//         icon={MessageSquare}
//       />

//       <StatCard
//         title="Companies"
//         value={data.totalCompanies}
//         icon={Building2}
//       />
//     </div>
//   );
// }

"use client";

import useDashboard from "@/hooks/useDashboard";

import Loading from "../common/Loading";
import Error from "../common/Error";
import StatCard from "./StatCard";

import {
  BookOpen,
  Users,
  GraduationCap,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function DashboardStats() {
  const {
    statistics,
    loading,
    error,
  } = useDashboard();

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      <StatCard
        title="Courses"
        value={statistics.totalCourses}
        icon={BookOpen}
      />

      <StatCard
        title="Instructors"
        value={statistics.totalInstructors}
        icon={Users}
      />

      <StatCard
        title="Students"
        value={statistics.totalStudents}
        icon={GraduationCap}
      />

      <StatCard
        title="Reviews"
        value={statistics.totalReviews}
        icon={MessageSquare}
      />

      <StatCard
        title="Companies"
        value={statistics.totalCompanies}
        icon={Building2}
      />
    </div>
  );
}
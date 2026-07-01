"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  LayoutDashboard,
  Image,
  BookOpen,
  Users,
  GraduationCap,
  MessageSquare,
  HelpCircle,
  Building2,
  UserCheck,
  Info,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Hero",
    href: "/admin/hero",
    icon: Image,
  },
  {
    title: "About",
    href: "/admin/about",
    icon: Info,
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Instructors",
    href: "/admin/instructors",
    icon: Users,
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: GraduationCap,
  },
  {
    title: "Successful Students",
    href: "/admin/successful-students",
    icon: UserCheck,
  },
  {
    title: "Feedback",
    href: "/admin/feedback",
    icon: MessageSquare,
  },
  {
    title: "FAQ",
    href: "/admin/faq",
    icon: HelpCircle,
  },
  {
    title: "Companies",
    href: "/admin/companies",
    icon: Building2,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white h-screen sticky top-0">
      <div className="text-2xl font-bold p-6 border-b">ProEdu Admin</div>

      <nav className="flex flex-col p-4 gap-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 transition",
                pathname === menu.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100",
              )}
            >
              <Icon size={18} />
              {menu.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

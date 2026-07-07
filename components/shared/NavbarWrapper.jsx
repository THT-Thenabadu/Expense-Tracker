"use client";

import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const router = useRouter();

  const getActiveLink = () => {
    if (pathname === "/add") return "Add";
    if (pathname === "/transactions") return "Transactions";
    return "Home";
  };

  const handleNavigate = (pageName) => {
    const routes = {
      Home: "/",
      Add: "/add",
      Transactions: "/transactions",
    };

    const path = routes[pageName];
    if (path) {
      router.push(path);
    }
  };

  return (
    <Navbar
      activeLink={getActiveLink()}
      onNavigate={handleNavigate}
    />
  );
}
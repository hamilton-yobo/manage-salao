"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Agendamentos", href: "/agendamentos", symbol: "calendar_month" },
    { name: "Clientes", href: "/clientes", symbol: "group" },
    { name: "Colaboradores", href: "/colaboradores", symbol: "badge" },
    { name: "Servicos", href: "/servicos", symbol: "content_cut" },
    { name: "Horarios", href: "/horarios", symbol: "schedule" },
  ];

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <nav className="bg-lavenderMedium shadow shadow-gray-600 p-4 w-64 h-screen text-beigeLight">
      <h1 className="font-extrabold text-2xl">Click <span className="material-symbols-outlined">right_click</span> Salao</h1>
      <div className="space-y-4 p-4 font-bold">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name} className={
              isActive ? "bg-grayMedium p-2 rounded flex content-center space-x-1"
                : "hover:bg-grayMedium transition-05 p-2 rounded cursor-pointer flex content-center space-x-1"
            }>
              <span className="material-symbols-outlined">{link.symbol}</span>
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  )
}

export default Sidebar;

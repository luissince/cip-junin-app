"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Bell, Home, CreditCard, Package, User } from "lucide-react"
import { CipModal } from "@/components/cip-modal"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [showNotification, setShowNotification] = useState(true)
  const [showCipModal, setShowCipModal] = useState(false)

  const handleProfileClick = () => {
    router.push("/dashboard/perfil")
  }

  const handleNotificationsClick = () => {
    router.push("/dashboard/notificaciones")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
        <div className="flex items-center">
          <button className="text-lg font-bold text-red-700" onClick={() => setShowCipModal(true)}>
            CIP Junín
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative rounded-full p-1" onClick={handleNotificationsClick}>
            <Bell className="h-6 w-6 text-gray-600" />
            {showNotification && <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500"></span>}
          </button>
          <button className="h-8 w-8 overflow-hidden rounded-full border border-gray-300" onClick={handleProfileClick}>
            <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-10 flex h-16 items-center justify-around border-t bg-white shadow-md">
        <Link
          href="/dashboard"
          className={`flex flex-col items-center justify-center px-3 py-1 ${
            pathname === "/dashboard" ? "text-red-700" : "text-gray-600"
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Inicio</span>
        </Link>
        <Link
          href="/dashboard/servicios"
          className={`flex flex-col items-center justify-center px-3 py-1 ${
            pathname.startsWith("/dashboard/servicios") || pathname.startsWith("/dashboard/tramites")
              ? "text-red-700"
              : "text-gray-600"
          }`}
        >
          <Package className="h-5 w-5" />
          <span className="text-xs">Servicios</span>
        </Link>
        <Link
          href="/dashboard/pagos"
          className={`flex flex-col items-center justify-center px-3 py-1 ${
            pathname.startsWith("/dashboard/pagos") ? "text-red-700" : "text-gray-600"
          }`}
        >
          <CreditCard className="h-5 w-5" />
          <span className="text-xs">Pagos</span>
        </Link>
        <Link
          href="/dashboard/noticias"
          className={`flex flex-col items-center justify-center px-3 py-1 ${
            pathname.startsWith("/dashboard/noticias") ? "text-red-700" : "text-gray-600"
          }`}
        >
          <Bell className="h-5 w-5" />
          <span className="text-xs">Noticias</span>
        </Link>
        <Link
          href="/dashboard/perfil"
          className={`flex flex-col items-center justify-center px-3 py-1 ${
            pathname.startsWith("/dashboard/perfil") ? "text-red-700" : "text-gray-600"
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Perfil</span>
        </Link>
      </nav>

      {/* CIP Modal */}
      <CipModal open={showCipModal} onClose={() => setShowCipModal(false)} />
    </div>
  )
}

import Link from "next/link"
import { FileText, CreditCard, Package, Bell, Phone, QrCode } from "lucide-react"

export default function QuickAccessGrid() {
  const quickLinks = [
    {
      title: "Trámites",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-700",
      href: "/dashboard/servicios/tramites",
    },
    {
      title: "Pagos",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-green-100 text-green-700",
      href: "/dashboard/pagos",
    },
    {
      title: "Servicios",
      icon: <Package className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-700",
      href: "/dashboard/servicios",
    },
    {
      title: "Noticias",
      icon: <Bell className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-700",
      href: "/dashboard/noticias",
    },
    {
      title: "Directorio",
      icon: <Phone className="h-6 w-6" />,
      color: "bg-red-100 text-red-700",
      href: "/dashboard/directorio",
    },
    {
      title: "Validar QR",
      icon: <QrCode className="h-6 w-6" />,
      color: "bg-teal-100 text-teal-700",
      href: "/dashboard/servicios/validar-documentos",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-3">
      {quickLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 shadow-sm transition-all hover:shadow-md"
        >
          <div className={`mb-2 rounded-full p-2 ${link.color}`}>{link.icon}</div>
          <span className="text-center text-xs font-medium">{link.title}</span>
        </Link>
      ))}
    </div>
  )
}

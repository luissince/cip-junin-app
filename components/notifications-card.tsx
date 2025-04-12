import { Bell, Calendar, FileText, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationsCard() {
  const notifications = [
    {
      id: 1,
      title: "Elecciones CIP 2024",
      description: "Las elecciones se realizarán el 15 de mayo. Participe.",
      icon: <Calendar className="h-5 w-5 text-red-600" />,
      time: "Hace 2 días",
    },
    {
      id: 2,
      title: "Trámite aprobado",
      description: "Su constancia de habilidad ha sido aprobada.",
      icon: <FileText className="h-5 w-5 text-green-600" />,
      time: "Hace 3 días",
    },
    {
      id: 3,
      title: "Pago pendiente",
      description: "Recuerde realizar el pago de su cuota anual.",
      icon: <CreditCard className="h-5 w-5 text-amber-600" />,
      time: "Hace 5 días",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
        <CardTitle className="text-lg font-bold">Notificaciones</CardTitle>
        <Bell className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-3 rounded-lg border border-gray-100 p-3 shadow-sm"
            >
              <div className="mt-0.5">{notification.icon}</div>
              <div className="flex-1">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-600">{notification.description}</p>
                <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

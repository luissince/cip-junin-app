"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Calendar,
  FileText,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Info,
  ChevronRight,
  Clock,
} from "lucide-react"

export default function NotificationsList() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Elecciones CIP 2024",
      description: "Las elecciones se realizarán el 15 de mayo. Participe.",
      icon: <Calendar className="h-5 w-5 text-red-600" />,
      time: "Hace 2 días",
      type: "event",
      read: false,
      link: "/dashboard/noticias/1",
    },
    {
      id: 2,
      title: "Trámite aprobado",
      description: "Su constancia de habilidad ha sido aprobada.",
      icon: <FileText className="h-5 w-5 text-green-600" />,
      time: "Hace 3 días",
      type: "procedure",
      read: false,
      link: "/dashboard/tramites/TRA-2024-0056",
    },
    {
      id: 3,
      title: "Pago pendiente",
      description: "Recuerde realizar el pago de su cuota anual.",
      icon: <CreditCard className="h-5 w-5 text-amber-600" />,
      time: "Hace 5 días",
      type: "payment",
      read: true,
      link: "/dashboard/pagos",
    },
    {
      id: 4,
      title: "Nuevo curso disponible",
      description: "Se ha publicado un nuevo curso de especialización en BIM.",
      icon: <Info className="h-5 w-5 text-blue-600" />,
      time: "Hace 1 semana",
      type: "course",
      read: true,
      link: "/dashboard/servicios/cursos",
    },
    {
      id: 5,
      title: "Actualización de datos requerida",
      description: "Por favor actualice sus datos de contacto en su perfil.",
      icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
      time: "Hace 2 semanas",
      type: "alert",
      read: true,
      link: "/dashboard/perfil/editar",
    },
    {
      id: 6,
      title: "Recordatorio: Renovación de habilidad",
      description: "Su habilidad profesional vence en 15 días.",
      icon: <Clock className="h-5 w-5 text-purple-600" />,
      time: "Hace 1 día",
      type: "reminder",
      read: false,
      link: "/dashboard/pagos/realizar",
    },
    {
      id: 7,
      title: "Recordatorio: Evento próximo",
      description: "Conferencia de Ingeniería Sostenible mañana a las 18:00.",
      icon: <Clock className="h-5 w-5 text-purple-600" />,
      time: "Hace 12 horas",
      type: "reminder",
      read: false,
      link: "/dashboard/noticias/2",
    },
  ])

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-bold">Notificaciones</CardTitle>
          {unreadCount > 0 && <Badge className="bg-red-100 text-red-800">{unreadCount} nuevas</Badge>}
        </div>
        <Button variant="ghost" size="sm" onClick={markAllAsRead}>
          <CheckCircle className="mr-2 h-4 w-4" /> Marcar todas como leídas
        </Button>
      </CardHeader>
      <CardContent className="pb-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="event">Eventos</TabsTrigger>
            <TabsTrigger value="procedure">Trámites</TabsTrigger>
            <TabsTrigger value="payment">Pagos</TabsTrigger>
            <TabsTrigger value="reminder">Recordatorios</TabsTrigger>
            <TabsTrigger value="alert">Alertas</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-3">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} onMarkAsRead={markAsRead} />
                ))
              ) : (
                <div className="rounded-lg border border-dashed p-6 text-center">
                  <Bell className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                  <p className="text-gray-500">No tiene notificaciones</p>
                </div>
              )}
            </div>
          </TabsContent>

          {["event", "procedure", "payment", "alert", "course", "reminder"].map((type) => (
            <TabsContent key={type} value={type} className="mt-4">
              <div className="space-y-3">
                {notifications.filter((n) => n.type === type).length > 0 ? (
                  notifications
                    .filter((n) => n.type === type)
                    .map((notification) => (
                      <NotificationItem key={notification.id} notification={notification} onMarkAsRead={markAsRead} />
                    ))
                ) : (
                  <div className="rounded-lg border border-dashed p-6 text-center">
                    <Bell className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                    <p className="text-gray-500">No tiene notificaciones de este tipo</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface Notification {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  time: string
  type: string
  read: boolean
  link: string
}

interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: number) => void
}

function NotificationItem({ notification, onMarkAsRead }: NotificationItemProps) {
  return (
    <Link
      href={notification.link}
      onClick={() => onMarkAsRead(notification.id)}
      className={`block ${!notification.read ? "bg-gray-50" : ""}`}
    >
      <div className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-gray-50">
        <div className="mt-0.5">{notification.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`font-medium ${!notification.read ? "text-black" : "text-gray-700"}`}>
              {notification.title}
            </h3>
            {!notification.read && <span className="h-2 w-2 rounded-full bg-red-500"></span>}
          </div>
          <p className="text-sm text-gray-600">{notification.description}</p>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-xs text-gray-400">{notification.time}</p>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </Link>
  )
}

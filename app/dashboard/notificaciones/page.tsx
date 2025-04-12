import DashboardLayout from "@/components/dashboard-layout"
import NotificationsList from "@/components/notifications-list"

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Notificaciones</h1>
        <NotificationsList />
      </div>
    </DashboardLayout>
  )
}

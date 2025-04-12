import DashboardLayout from "@/components/dashboard-layout"
import WelcomeCard from "@/components/welcome-card"
import QuickAccessGrid from "@/components/quick-access-grid"
import NotificationsCard from "@/components/notifications-card"
import NewsPreview from "@/components/news-preview"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <WelcomeCard />
        <QuickAccessGrid />
        <NotificationsCard />
        <NewsPreview />
      </div>
    </DashboardLayout>
  )
}

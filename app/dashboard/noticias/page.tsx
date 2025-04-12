import DashboardLayout from "@/components/dashboard-layout"
import NewsList from "@/components/news-list"

export default function NewsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Noticias y Eventos</h1>
        <NewsList />
      </div>
    </DashboardLayout>
  )
}

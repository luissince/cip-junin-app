import DashboardLayout from "@/components/dashboard-layout"
import DirectoryList from "@/components/directory-list"

export default function DirectoryPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Directorio</h1>
        <DirectoryList />
      </div>
    </DashboardLayout>
  )
}

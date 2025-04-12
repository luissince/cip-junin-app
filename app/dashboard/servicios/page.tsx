import DashboardLayout from "@/components/dashboard-layout"
import ServicesList from "@/components/services-list"

export default function ServicesPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Servicios</h1>
        <ServicesList />
      </div>
    </DashboardLayout>
  )
}

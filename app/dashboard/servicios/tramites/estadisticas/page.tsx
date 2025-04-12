import DashboardLayout from "@/components/dashboard-layout"
import ProcedureStatistics from "@/components/procedure-statistics"

export default function ProcedureStatisticsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Estadísticas de Trámites</h1>
        <ProcedureStatistics />
      </div>
    </DashboardLayout>
  )
}

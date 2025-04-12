import DashboardLayout from "@/components/dashboard-layout"
import ProceduresList from "@/components/procedures-list"
import ProceduresTracking from "@/components/procedures-tracking"

export default function ProceduresPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Trámite Documentario</h1>
        <ProceduresList />
        <ProceduresTracking />
      </div>
    </DashboardLayout>
  )
}

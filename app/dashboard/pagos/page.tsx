import DashboardLayout from "@/components/dashboard-layout"
import PaymentOptions from "@/components/payment-options"
import PaymentHistory from "@/components/payment-history"

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Pagos y Servicios</h1>
        <PaymentOptions />
        <PaymentHistory />
      </div>
    </DashboardLayout>
  )
}

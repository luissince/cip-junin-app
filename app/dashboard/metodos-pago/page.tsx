import DashboardLayout from "@/components/dashboard-layout"
import PaymentMethodsInfo from "@/components/payment-methods-info"

export default function PaymentMethodsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Métodos de Pago</h1>
        <PaymentMethodsInfo />
      </div>
    </DashboardLayout>
  )
}

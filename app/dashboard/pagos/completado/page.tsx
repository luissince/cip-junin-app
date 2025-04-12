import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, ArrowRight } from "lucide-react"

export default function PaymentCompletedPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <Card className="mx-auto max-w-lg">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mb-2 text-2xl font-bold">¡Pago Exitoso!</h1>
            <p className="mb-6 text-gray-600">Su pago ha sido procesado correctamente.</p>

            <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
              <h2 className="mb-2 font-medium">Detalles del pago:</h2>
              <p className="text-sm">
                <span className="font-medium">Número de operación:</span> PAG-2024-0124
              </p>
              <p className="text-sm">
                <span className="font-medium">Fecha:</span> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-medium">Concepto:</span> Cuota anual 2024
              </p>
              <p className="text-sm">
                <span className="font-medium">Monto:</span> S/. 413.00
              </p>
              <p className="text-sm">
                <span className="font-medium">Método de pago:</span> Tarjeta de crédito
              </p>
            </div>

            <div className="flex w-full flex-col space-y-3">
              <Button asChild className="w-full bg-red-700 hover:bg-red-800">
                <Link href="#">
                  Descargar comprobante <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard">
                  Volver al inicio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, ArrowRight, FileSignature } from "lucide-react"

export default function ProcedureCompletedPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <Card className="mx-auto max-w-lg">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mb-2 text-2xl font-bold">¡Trámite Completado!</h1>
            <p className="mb-6 text-gray-600">Su solicitud ha sido recibida correctamente y está siendo procesada.</p>

            <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
              <h2 className="mb-2 font-medium">Detalles del trámite:</h2>
              <p className="text-sm">
                <span className="font-medium">Número de trámite:</span> TRA-2024-0078
              </p>
              <p className="text-sm">
                <span className="font-medium">Fecha de solicitud:</span> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-medium">Estado:</span> En procesamiento
              </p>
              <p className="text-sm">
                <span className="font-medium">Tiempo estimado:</span> 24 horas
              </p>
            </div>

            <div className="flex w-full flex-col space-y-3">
              {/* Botón principal para nuevo trámite */}
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/dashboard/servicios/tramites/solicitar?new=true">
                  <FileSignature className="mr-2 h-5 w-5" /> Iniciar Nuevo Trámite
                </Link>
              </Button>

              <Button asChild className="w-full bg-red-700 hover:bg-red-800">
                <Link href="/dashboard/servicios/tramites">
                  <FileText className="mr-2 h-4 w-4" /> Ver mis trámites
                </Link>
              </Button>

              <Button asChild variant="ghost" className="w-full">
                <Link href="/dashboard">
                  <ArrowRight className="mr-2 h-4 w-4" /> Volver al inicio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

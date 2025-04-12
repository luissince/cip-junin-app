import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, FileText, Bell } from "lucide-react"

export default function RegistroCompletadoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="flex h-16 items-center justify-center border-b bg-white px-4 shadow-sm">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="CIP Junín Logo"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-lg font-bold text-red-700">CIP Junín</span>
        </div>
      </header>

      <div className="container mx-auto max-w-lg space-y-6 p-4 pt-10">
        <Card className="border-2 border-gray-200 shadow-xl">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mb-2 text-2xl font-bold">¡Solicitud Enviada!</h1>
            <p className="mb-6 text-gray-600">Su solicitud de colegiatura ha sido recibida correctamente.</p>

            <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
              <h2 className="mb-2 font-medium">Detalles de la solicitud:</h2>
              <p className="text-sm">
                <span className="font-medium">Número de solicitud:</span> COL-2024-0078
              </p>
              <p className="text-sm">
                <span className="font-medium">Fecha de solicitud:</span> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-medium">Estado:</span> En revisión
              </p>
              <p className="text-sm">
                <span className="font-medium">Tiempo estimado:</span> 5-7 días hábiles
              </p>
            </div>

            <div className="mb-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 text-left">
              <p className="mb-2">
                <Bell className="mr-2 inline-block h-4 w-4" /> Próximos pasos:
              </p>
              <ol className="ml-6 list-decimal space-y-1">
                <li>Revisión de documentos por el CIP (5-7 días hábiles)</li>
                <li>Notificación de aprobación vía correo electrónico</li>
                <li>Programación de ceremonia de juramentación</li>
                <li>Entrega de carnet y diploma de colegiado</li>
              </ol>
            </div>

            <div className="flex w-full flex-col space-y-3">
              <Button asChild className="w-full bg-red-700 hover:bg-red-800">
                <Link href="/seguimiento-colegiatura">
                  <FileText className="mr-2 h-4 w-4" /> Seguimiento de solicitud
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">
                  <ArrowRight className="mr-2 h-4 w-4" /> Volver al inicio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

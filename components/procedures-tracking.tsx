import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Truck, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProceduresTracking() {
  const activeProcedures = [
    {
      id: "TRA-2024-0056",
      title: "Constancia de Habilidad",
      requestDate: "12/04/2024",
      status: "completed",
      steps: [
        { name: "Solicitud recibida", completed: true, date: "12/04/2024" },
        { name: "En procesamiento", completed: true, date: "12/04/2024" },
        { name: "Documento generado", completed: true, date: "13/04/2024" },
        { name: "Listo para entrega", completed: true, date: "13/04/2024" },
      ],
      deliveryMethod: "Digital",
    },
    {
      id: "TRA-2024-0042",
      title: "Certificado de Obra",
      requestDate: "05/04/2024",
      status: "in-progress",
      steps: [
        { name: "Solicitud recibida", completed: true, date: "05/04/2024" },
        { name: "En procesamiento", completed: true, date: "06/04/2024" },
        { name: "Documento generado", completed: false, date: null },
        { name: "Listo para entrega", completed: false, date: null },
      ],
      deliveryMethod: "Físico - Courier",
      hasObservations: true,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Seguimiento de Trámites</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/servicios/tramites/estadisticas">
              <BarChart2 className="mr-2 h-4 w-4" /> Estadísticas
            </Link>
          </Button>
          <Button size="sm" className="bg-red-700 hover:bg-red-800" asChild>
            <Link href={"/dashboard/servicios/tramites/solicitar"}>Nuevo Trámite</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activeProcedures.map((procedure) => (
            <div key={procedure.id} className="rounded-lg border p-4">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{procedure.title}</h3>
                    {procedure.status === "completed" ? (
                      <Badge className="bg-green-100 text-green-800">Completado</Badge>
                    ) : (
                      <Badge className="bg-amber-100 text-amber-800">En proceso</Badge>
                    )}
                    {procedure.hasObservations && (
                      <Badge variant="outline" className="border-red-200 bg-red-50 text-red-800">
                        Con observaciones
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    Solicitado: {procedure.requestDate} • #{procedure.id}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/servicios/tramites/detalle/${procedure.id}`}>Ver detalles</Link>
                  </Button>
                  {procedure.status === "completed" && (
                    <Button size="sm" className="bg-red-700 hover:bg-red-800">
                      Descargar
                    </Button>
                  )}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {procedure.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center ${
                      index < procedure.steps.length - 1
                        ? "after:absolute after:right-0 after:top-4 after:h-0.5 after:w-full after:bg-gray-200 after:content-[''] sm:after:right-[-50%] sm:after:w-full"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                        step.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step.completed ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                    </div>
                    <p className="mt-2 text-center text-xs font-medium">{step.name}</p>
                    {step.date && <p className="text-center text-xs text-gray-500">{step.date}</p>}
                  </div>
                ))}
              </div>

              <div className="flex items-center rounded-md bg-gray-50 p-2 text-sm">
                <Truck className="mr-2 h-4 w-4 text-gray-500" />
                <span>Método de entrega: {procedure.deliveryMethod}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

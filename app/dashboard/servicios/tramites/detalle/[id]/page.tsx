import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, Truck, ArrowLeft, Download, FileText, History, MessageSquare, FileUp } from "lucide-react"
import ProcedureComments from "@/components/procedure-comments"
import ProcedureHistory from "@/components/procedure-history"
import ProcedureAdditionalDocuments from "@/components/procedure-additional-documents"

export default function ProcedureDetailPage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los datos del trámite desde una API
  // usando el ID proporcionado en los parámetros
  const procedureId = params.id

  // Datos de ejemplo para el trámite
  const procedure = {
    id: procedureId,
    title: "Constancia de Habilidad",
    requestDate: "12/04/2024",
    status: "in-progress", // completed, in-progress, pending
    steps: [
      { name: "Solicitud recibida", completed: true, date: "12/04/2024", time: "10:30 AM" },
      { name: "En procesamiento", completed: true, date: "12/04/2024", time: "11:45 AM" },
      { name: "Documento generado", completed: false, date: null, time: null },
      { name: "Listo para entrega", completed: false, date: null, time: null },
    ],
    deliveryMethod: "Digital",
    purpose: "Presentación laboral",
    entity: "Constructora ABC S.A.C.",
    observations: "Documento requerido para licitación pública",
    documents: [
      { name: "DNI.pdf", type: "application/pdf", size: "1.2 MB" },
      { name: "Solicitud.pdf", type: "application/pdf", size: "0.8 MB" },
    ],
    price: "S/. 30.00",
    paymentMethod: "Tarjeta de crédito",
    paymentDate: "12/04/2024",
    paymentReference: "PAG-2024-0045",
    assignedTo: "Ing. María Sánchez",
    department: "Secretaría Técnica",
    estimatedCompletionDate: "15/04/2024",
    hasObservations: true,
    priority: "Normal", // Alta, Normal, Baja
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/dashboard/servicios/tramites">
              <ArrowLeft className="mr-1 h-4 w-4" /> Volver
            </Link>
          </Button>
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Detalle del Trámite</h1>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">{procedure.title}</h2>
                  {procedure.status === "completed" ? (
                    <Badge className="bg-green-100 text-green-800">Completado</Badge>
                  ) : procedure.status === "in-progress" ? (
                    <Badge className="bg-amber-100 text-amber-800">En proceso</Badge>
                  ) : (
                    <Badge className="bg-blue-100 text-blue-800">Pendiente</Badge>
                  )}
                  {procedure.hasObservations && (
                    <Badge variant="outline" className="border-red-200 bg-red-50 text-red-800">
                      Con observaciones
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <p className="text-sm text-gray-500">
                    Solicitado: {procedure.requestDate} • #{procedure.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    Asignado a: {procedure.assignedTo} • {procedure.department}
                  </p>
                </div>
              </div>
              {procedure.status === "completed" && (
                <Button className="bg-red-700 hover:bg-red-800">
                  <Download className="mr-2 h-4 w-4" /> Descargar documento
                </Button>
              )}
            </div>

            <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
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
                  {step.time && <p className="text-center text-xs text-gray-500">{step.time}</p>}
                </div>
              ))}
            </div>

            <Tabs defaultValue="info">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="info">
                  <FileText className="mr-2 h-4 w-4" /> Información
                </TabsTrigger>
                <TabsTrigger value="documents">
                  <FileUp className="mr-2 h-4 w-4" /> Documentos
                </TabsTrigger>
                <TabsTrigger value="history">
                  <History className="mr-2 h-4 w-4" /> Historial
                </TabsTrigger>
                <TabsTrigger value="comments">
                  <MessageSquare className="mr-2 h-4 w-4" /> Comunicaciones
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Información del trámite</h3>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="grid gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Propósito</p>
                          <p className="font-medium">{procedure.purpose}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Entidad destinataria</p>
                          <p className="font-medium">{procedure.entity}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Observaciones</p>
                          <p className="font-medium">{procedure.observations || "Ninguna"}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Método de entrega</p>
                          <div className="flex items-center">
                            <Truck className="mr-2 h-4 w-4 text-gray-500" />
                            <span>{procedure.deliveryMethod}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Fecha estimada de finalización</p>
                          <p className="font-medium">{procedure.estimatedCompletionDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Prioridad</p>
                          <p className="font-medium">{procedure.priority}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Información de pago</h3>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="grid gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Monto</p>
                          <p className="font-medium">{procedure.price}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Método de pago</p>
                          <p className="font-medium">{procedure.paymentMethod}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Fecha de pago</p>
                          <p className="font-medium">{procedure.paymentDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Referencia de pago</p>
                          <p className="font-medium">{procedure.paymentReference}</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium">Documentos adjuntos</h3>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="space-y-3">
                        {procedure.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between rounded-md border bg-white p-2">
                            <div className="flex items-center">
                              <FileText className="mr-2 h-5 w-5 text-gray-500" />
                              <div>
                                <p className="text-sm font-medium">{doc.name}</p>
                                <p className="text-xs text-gray-500">{doc.size}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-4">
                <ProcedureAdditionalDocuments procedureId={procedureId} />
              </TabsContent>

              <TabsContent value="history" className="mt-4">
                <ProcedureHistory procedureId={procedureId} />
              </TabsContent>

              <TabsContent value="comments" className="mt-4">
                <ProcedureComments procedureId={procedureId} />
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-end space-x-3">
              <Button variant="outline" asChild>
                <Link href="/dashboard/servicios/tramites">Ver todos mis trámites</Link>
              </Button>
              {procedure.status === "completed" && (
                <Button className="bg-red-700 hover:bg-red-800">
                  <Download className="mr-2 h-4 w-4" /> Descargar documento
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

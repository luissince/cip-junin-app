import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, AlertCircle, User, FileCheck, MessageSquare, Upload } from "lucide-react"

interface HistoryEvent {
  id: string
  type: "status_change" | "document_upload" | "comment" | "observation" | "assignment" | "payment"
  description: string
  timestamp: string
  user?: string
  role?: string
}

interface ProcedureHistoryProps {
  procedureId: string
}

export default function ProcedureHistory({ procedureId }: ProcedureHistoryProps) {
  // En una aplicación real, estos datos vendrían de una API
  const historyEvents: HistoryEvent[] = [
    {
      id: "1",
      type: "status_change",
      description: "Trámite iniciado",
      timestamp: "12/04/2024 - 09:15 AM",
      user: "Carlos Rodríguez",
      role: "Solicitante",
    },
    {
      id: "2",
      type: "document_upload",
      description: "Documentos adjuntados: DNI.pdf, Solicitud.pdf",
      timestamp: "12/04/2024 - 09:20 AM",
      user: "Carlos Rodríguez",
      role: "Solicitante",
    },
    {
      id: "3",
      type: "payment",
      description: "Pago realizado: S/. 30.00 (Tarjeta de crédito)",
      timestamp: "12/04/2024 - 09:25 AM",
      user: "Carlos Rodríguez",
      role: "Solicitante",
    },
    {
      id: "4",
      type: "status_change",
      description: "Trámite recibido y en revisión",
      timestamp: "12/04/2024 - 10:30 AM",
      user: "Ing. María Sánchez",
      role: "Evaluador",
    },
    {
      id: "5",
      type: "assignment",
      description: "Asignado a Ing. María Sánchez",
      timestamp: "12/04/2024 - 10:35 AM",
      user: "Sistema",
      role: "Automático",
    },
    {
      id: "6",
      type: "observation",
      description: "Se requiere comprobante de pago original",
      timestamp: "12/04/2024 - 11:20 AM",
      user: "Ing. María Sánchez",
      role: "Evaluador",
    },
    {
      id: "7",
      type: "comment",
      description: "Comunicación enviada al solicitante",
      timestamp: "12/04/2024 - 11:25 AM",
      user: "Sistema",
      role: "Automático",
    },
    {
      id: "8",
      type: "document_upload",
      description: "Documento adjuntado: Comprobante_Pago.pdf",
      timestamp: "12/04/2024 - 02:10 PM",
      user: "Carlos Rodríguez",
      role: "Solicitante",
    },
    {
      id: "9",
      type: "status_change",
      description: "Documentación completa, en procesamiento",
      timestamp: "12/04/2024 - 03:45 PM",
      user: "Ing. María Sánchez",
      role: "Evaluador",
    },
    {
      id: "10",
      type: "status_change",
      description: "Documento generado",
      timestamp: "13/04/2024 - 09:15 AM",
      user: "Ing. Pedro Gómez",
      role: "Supervisor",
    },
    {
      id: "11",
      type: "status_change",
      description: "Trámite completado",
      timestamp: "13/04/2024 - 10:00 AM",
      user: "Sistema",
      role: "Automático",
    },
  ]

  const getIconForEventType = (type: string) => {
    switch (type) {
      case "status_change":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "document_upload":
        return <Upload className="h-5 w-5 text-purple-600" />
      case "comment":
        return <MessageSquare className="h-5 w-5 text-gray-600" />
      case "observation":
        return <AlertCircle className="h-5 w-5 text-amber-600" />
      case "assignment":
        return <User className="h-5 w-5 text-indigo-600" />
      case "payment":
        return <FileCheck className="h-5 w-5 text-green-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getBadgeForEventType = (type: string) => {
    switch (type) {
      case "status_change":
        return <Badge className="bg-blue-100 text-blue-800">Estado</Badge>
      case "document_upload":
        return <Badge className="bg-purple-100 text-purple-800">Documento</Badge>
      case "comment":
        return <Badge className="bg-gray-100 text-gray-800">Mensaje</Badge>
      case "observation":
        return <Badge className="bg-amber-100 text-amber-800">Observación</Badge>
      case "assignment":
        return <Badge className="bg-indigo-100 text-indigo-800">Asignación</Badge>
      case "payment":
        return <Badge className="bg-green-100 text-green-800">Pago</Badge>
      default:
        return <Badge variant="outline">Otro</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Historial del trámite</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-0 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-gray-200">
          {historyEvents.map((event) => (
            <div key={event.id} className="relative pb-6">
              <div className="absolute left-[-24px] flex h-6 w-6 items-center justify-center rounded-full bg-white">
                {getIconForEventType(event.type)}
              </div>
              <div className="flex flex-col space-y-1 rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getBadgeForEventType(event.type)}
                    <span className="text-xs text-gray-500">{event.timestamp}</span>
                  </div>
                  {event.user && (
                    <div className="text-xs text-gray-500">
                      {event.user} • {event.role}
                    </div>
                  )}
                </div>
                <p className="text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

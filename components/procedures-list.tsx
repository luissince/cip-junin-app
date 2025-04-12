import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, FileClock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProceduresList() {
  const procedures = [
    {
      id: 1,
      title: "Constancia de Habilidad",
      description: "Documento que certifica que el ingeniero está habilitado para ejercer",
      icon: <FileCheck className="h-5 w-5 text-green-600" />,
      time: "Entrega: 24 horas",
      price: "S/. 30.00",
    },
    {
      id: 2,
      title: "Certificado de Obra",
      description: "Documento que valida la participación en un proyecto u obra",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      time: "Entrega: 3-5 días hábiles",
      price: "S/. 120.00",
    },
    {
      id: 3,
      title: "Duplicado de Carnet",
      description: "Solicitud de un nuevo carnet de colegiado por pérdida o deterioro",
      icon: <FileClock className="h-5 w-5 text-amber-600" />,
      time: "Entrega: 7 días hábiles",
      price: "S/. 50.00",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trámites Disponibles</CardTitle>
        <CardDescription>Seleccione el trámite que desea realizar</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className="flex flex-col justify-between gap-4 rounded-lg border p-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{procedure.icon}</div>
                <div>
                  <h3 className="font-medium">{procedure.title}</h3>
                  <p className="text-sm text-gray-600">{procedure.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="flex items-center text-xs text-gray-500">
                      <FileClock className="mr-1 h-3 w-3" />
                      {procedure.time}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <Truck className="mr-1 h-3 w-3" />
                      Entrega física o digital
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="font-bold">{procedure.price}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={"/dashboard/servicios/tramites/solicitar"}>Solicitar</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

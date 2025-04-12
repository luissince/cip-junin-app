"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, CheckCircle2, Clock, FileText, MessageSquare, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SeguimientoColegiaturaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(true)

  // En una aplicación real, esta información vendría de una API
  const solicitud = {
    numero: "COL-2024-0078",
    estado: "en-revision", // en-revision, aprobado, observado, rechazado
    fechaSolicitud: "15/04/2024",
    fechaEstimada: "22/04/2024",
    solicitante: "Carlos Rodríguez Mendoza",
    especialidad: "Ingeniería Civil",
    universidad: "Universidad Nacional del Centro del Perú",
    pasos: [
      { nombre: "Solicitud recibida", completado: true, fecha: "15/04/2024" },
      { nombre: "Verificación de documentos", completado: true, fecha: "16/04/2024" },
      { nombre: "Revisión por comisión", completado: false, fecha: null },
      { nombre: "Aprobación", completado: false, fecha: null },
      { nombre: "Programación de juramentación", completado: false, fecha: null },
    ],
    documentos: [
      { nombre: "Título profesional.pdf", estado: "aprobado" },
      { nombre: "DNI.pdf", estado: "aprobado" },
      { nombre: "Foto_1.jpg", estado: "aprobado" },
      {
        nombre: "Comprobante_pago.pdf",
        estado: "observado",
        observacion:
          "El comprobante está incompleto. Por favor, adjunte el comprobante completo donde se muestre el monto total y la fecha de pago.",
      },
    ],
    mensajes: [
      {
        id: 1,
        remitente: "Sistema",
        contenido: "Su solicitud ha sido recibida correctamente. Estamos procesando su información.",
        fecha: "15/04/2024 - 10:30 AM",
      },
      {
        id: 2,
        remitente: "Ing. María López",
        contenido:
          "Hemos detectado un problema con el comprobante de pago adjunto. Por favor, suba un nuevo comprobante donde se muestre claramente el monto total y la fecha de pago.",
        fecha: "16/04/2024 - 11:45 AM",
      },
    ],
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // En una aplicación real, aquí se haría la búsqueda en la API
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="text-lg font-bold text-red-700">CIP Junín</span>
        </Link>
      </header>

      <div className="container mx-auto max-w-3xl space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Seguimiento de Colegiatura</h1>

        <Card>
          <CardHeader>
            <CardTitle>Consultar estado de solicitud</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="numero-solicitud">Número de solicitud</Label>
                <div className="flex gap-2">
                  <Input
                    id="numero-solicitud"
                    placeholder="Ej: COL-2024-0078"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-red-700 hover:bg-red-800">
                    <Search className="mr-2 h-4 w-4" /> Buscar
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>
                  Si no recuerda su número de solicitud, puede consultarlo en el correo de confirmación que recibió al
                  registrarse.
                </p>
              </div>
            </form>

            {showResults && (
              <div className="mt-6 space-y-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold">Solicitud: {solicitud.numero}</h2>
                      {solicitud.estado === "en-revision" ? (
                        <Badge className="bg-amber-100 text-amber-800">En revisión</Badge>
                      ) : solicitud.estado === "aprobado" ? (
                        <Badge className="bg-green-100 text-green-800">Aprobado</Badge>
                      ) : solicitud.estado === "observado" ? (
                        <Badge className="bg-red-100 text-red-800">Con observaciones</Badge>
                      ) : (
                        <Badge className="bg-gray-100 text-gray-800">Rechazado</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Solicitado: {solicitud.fechaSolicitud} • Fecha estimada: {solicitud.fechaEstimada}
                    </p>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {solicitud.pasos.map((paso, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center ${
                        index < solicitud.pasos.length - 1
                          ? "after:absolute after:right-0 after:top-4 after:h-0.5 after:w-full after:bg-gray-200 after:content-[''] sm:after:right-[-50%] sm:after:w-full"
                          : ""
                      }`}
                    >
                      <div
                        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                          paso.completado ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {paso.completado ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                      </div>
                      <p className="mt-2 text-center text-xs font-medium">{paso.nombre}</p>
                      {paso.fecha && <p className="text-center text-xs text-gray-500">{paso.fecha}</p>}
                    </div>
                  ))}
                </div>

                <Tabs defaultValue="info">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="info">
                      <FileText className="mr-2 h-4 w-4" /> Información
                    </TabsTrigger>
                    <TabsTrigger value="documentos">
                      <FileText className="mr-2 h-4 w-4" /> Documentos
                    </TabsTrigger>
                    <TabsTrigger value="mensajes">
                      <MessageSquare className="mr-2 h-4 w-4" /> Mensajes
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <h3 className="mb-3 text-sm font-medium">Datos personales</h3>
                            <div className="space-y-2 text-sm">
                              <p>
                                <span className="font-medium">Solicitante:</span> {solicitud.solicitante}
                              </p>
                              <p>
                                <span className="font-medium">Especialidad:</span> {solicitud.especialidad}
                              </p>
                              <p>
                                <span className="font-medium">Universidad:</span> {solicitud.universidad}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h3 className="mb-3 text-sm font-medium">Estado de la solicitud</h3>
                            <div className="space-y-2 text-sm">
                              <p>
                                <span className="font-medium">Fecha de solicitud:</span> {solicitud.fechaSolicitud}
                              </p>
                              <p>
                                <span className="font-medium">Fecha estimada de respuesta:</span>{" "}
                                {solicitud.fechaEstimada}
                              </p>
                              <p>
                                <span className="font-medium">Estado actual:</span>{" "}
                                {solicitud.estado === "en-revision"
                                  ? "En revisión"
                                  : solicitud.estado === "aprobado"
                                    ? "Aprobado"
                                    : solicitud.estado === "observado"
                                      ? "Con observaciones"
                                      : "Rechazado"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="documentos" className="mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          {solicitud.documentos.map((doc, index) => (
                            <div key={index} className="rounded-lg border p-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <FileText className="h-5 w-5 text-gray-500" />
                                  <div>
                                    <p className="font-medium">{doc.nombre}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {doc.estado === "aprobado" ? (
                                    <Badge className="bg-green-100 text-green-800">Aprobado</Badge>
                                  ) : doc.estado === "observado" ? (
                                    <Badge className="bg-red-100 text-red-800">Observado</Badge>
                                  ) : (
                                    <Badge className="bg-amber-100 text-amber-800">Pendiente</Badge>
                                  )}
                                  <Button variant="ghost" size="sm">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>

                              {doc.estado === "observado" && doc.observacion && (
                                <div className="mt-2 rounded-lg bg-red-50 p-2 text-sm text-red-800">
                                  <p>
                                    <span className="font-medium">Observación:</span> {doc.observacion}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {solicitud.documentos.some((doc) => doc.estado === "observado") && (
                          <div className="mt-4">
                            <Button className="w-full bg-red-700 hover:bg-red-800">Subir documentos corregidos</Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="mensajes" className="mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="max-h-96 space-y-4 overflow-y-auto p-1">
                          {solicitud.mensajes.map((mensaje) => (
                            <div key={mensaje.id} className="rounded-lg border p-3">
                              <div className="flex justify-between">
                                <p className="font-medium">{mensaje.remitente}</p>
                                <span className="text-xs text-gray-500">{mensaje.fecha}</span>
                              </div>
                              <p className="mt-2 text-sm">{mensaje.contenido}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex gap-2">
                          <Input placeholder="Escriba un mensaje o consulta..." />
                          <Button className="bg-red-700 hover:bg-red-800">Enviar</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

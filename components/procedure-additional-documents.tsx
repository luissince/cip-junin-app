"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, X, Download, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Document {
  id: string
  name: string
  size: string
  type: string
  uploadDate: string
  status: "pending" | "approved" | "rejected"
  required?: boolean
  observation?: string
}

interface ProcedureAdditionalDocumentsProps {
  procedureId: string
}

export default function ProcedureAdditionalDocuments({ procedureId }: ProcedureAdditionalDocumentsProps) {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "DNI.pdf",
      size: "1.2 MB",
      type: "application/pdf",
      uploadDate: "12/04/2024",
      status: "approved",
      required: true,
    },
    {
      id: "2",
      name: "Solicitud.pdf",
      size: "0.8 MB",
      type: "application/pdf",
      uploadDate: "12/04/2024",
      status: "approved",
      required: true,
    },
    {
      id: "3",
      name: "Comprobante_Pago.pdf",
      size: "0.5 MB",
      type: "application/pdf",
      uploadDate: "12/04/2024",
      status: "rejected",
      required: true,
      observation:
        "El comprobante está incompleto. Por favor, adjunte el comprobante completo donde se muestre el monto total y la fecha de pago.",
    },
  ])

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => file.name)
      setUploadedFiles([...uploadedFiles, ...newFiles])
    }
  }

  const handleSubmitFiles = () => {
    if (uploadedFiles.length === 0) return

    const newDocuments = uploadedFiles.map((fileName, index) => ({
      id: `new-${index + 1}`,
      name: fileName,
      size: "1.0 MB", // Tamaño ficticio
      type: fileName.endsWith(".pdf") ? "application/pdf" : "image/jpeg",
      uploadDate: new Date().toLocaleDateString("es-PE"),
      status: "pending" as const,
    }))

    setDocuments([...documents, ...newDocuments])
    setUploadedFiles([])
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Aprobado</span>
      case "rejected":
        return <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Rechazado</span>
      default:
        return <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">Pendiente</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Documentos del trámite</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-gray-500" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{doc.name}</p>
                      {doc.required && <span className="text-xs text-red-600">*Requerido</span>}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>Subido: {doc.uploadDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(doc.status)}
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {doc.status === "rejected" && doc.observation && (
                <Alert variant="destructive" className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Observación</AlertTitle>
                  <AlertDescription>{doc.observation}</AlertDescription>
                </Alert>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-dashed p-4">
          <h3 className="mb-2 text-sm font-medium">Adjuntar documentos adicionales</h3>
          <p className="mb-4 text-xs text-gray-500">
            Si se requieren documentos adicionales o necesita reemplazar un documento observado, puede adjuntarlos aquí.
          </p>

          <div className="space-y-3">
            <Label htmlFor="file-upload">Seleccionar archivos</Label>
            <Input id="file-upload" type="file" multiple onChange={handleFileUpload} />

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Archivos seleccionados:</p>
                <div className="max-h-32 overflow-y-auto rounded-md border bg-gray-50 p-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm">{file}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button onClick={handleSubmitFiles} className="bg-red-700 hover:bg-red-800">
                  <Upload className="mr-2 h-4 w-4" /> Subir documentos
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

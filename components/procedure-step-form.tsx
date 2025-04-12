"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FileText, Upload, CheckCircle, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

interface ProcedureStepFormProps {
  currentStep: number
  totalSteps: number
  onNextStep: () => void
  onPrevStep: () => void
}

export default function ProcedureStepForm({ currentStep, totalSteps, onNextStep, onPrevStep }: ProcedureStepFormProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("tarjeta")
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [deliveryType, setDeliveryType] = useState("digital")
  const [showMapModal, setShowMapModal] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState("")
  const mapRef = useRef<HTMLDivElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => file.name)
      setUploadedFiles([...uploadedFiles, ...newFiles])
    }
  }

  const handleSelectLocation = () => {
    setShowMapModal(true)
  }

  const handleConfirmLocation = () => {
    // En una implementación real, aquí obtendríamos la dirección seleccionada del mapa
    setSelectedAddress("Av. Giráldez 245, Huancayo, Junín")
    setShowMapModal(false)
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

    // setDocuments([...documents, ...newDocuments]) // Assuming 'documents' and 'setDocuments' exist in the parent component
    setUploadedFiles([])
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <FileText className="h-6 w-6 text-red-700" />
              <div>
                <h3 className="font-medium">Constancia de Habilidad</h3>
                <p className="text-sm text-gray-600">
                  Documento que certifica que el ingeniero está habilitado para ejercer
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="purpose">Propósito de la constancia</Label>
                <Select defaultValue="trabajo">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el propósito" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trabajo">Presentación laboral</SelectItem>
                    <SelectItem value="licitacion">Licitación</SelectItem>
                    <SelectItem value="proyecto">Firma de proyecto</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="entity">Entidad o empresa destinataria</Label>
                <Input id="entity" placeholder="Nombre de la entidad o empresa" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observations">Observaciones adicionales (opcional)</Label>
                <Textarea id="observations" placeholder="Ingrese cualquier detalle adicional que debamos conocer" />
              </div>

              <div className="space-y-2">
                <Label>Tipo de entrega</Label>
                <RadioGroup defaultValue="digital" value={deliveryType} onValueChange={setDeliveryType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="digital" id="digital" />
                    <Label htmlFor="digital">Digital (PDF)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fisica" id="fisica" />
                    <Label htmlFor="fisica">Física (Recojo en sede)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="courier" id="courier" />
                    <Label htmlFor="courier">Física (Envío por courier)</Label>
                  </div>
                </RadioGroup>
              </div>

              {deliveryType === "courier" && (
                <div className="space-y-2 rounded-lg border p-3">
                  <Label htmlFor="address">Dirección de entrega</Label>
                  <div className="flex gap-2">
                    <Input
                      id="address"
                      placeholder="Ingrese la dirección de entrega"
                      value={selectedAddress}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="button" variant="outline" onClick={handleSelectLocation} className="flex-shrink-0">
                      <MapPin className="mr-2 h-4 w-4" /> Mapa
                    </Button>
                  </div>
                  {selectedAddress && (
                    <p className="mt-2 text-sm text-gray-600">
                      <MapPin className="mr-1 inline-block h-3 w-3" />
                      Dirección seleccionada: {selectedAddress}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-medium">Documentos requeridos</h3>
              <p className="mb-4 text-sm text-gray-600">
                Para este trámite, necesitamos que adjunte los siguientes documentos:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-sm">
                <li>Documento de identidad (DNI o Carnet de Extranjería)</li>
                <li>Comprobante de pago (si ya realizó el pago)</li>
                <li>Carta de solicitud (en caso de requerimientos especiales)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Label htmlFor="file-upload">Subir documentos</Label>
              <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm font-medium">Arrastre archivos aquí o haga clic para seleccionar</p>
                  <p className="mt-1 text-xs text-gray-500">Formatos permitidos: PDF, JPG, PNG (máx. 5MB)</p>
                  <Input id="file-upload" type="file" className="mt-4 w-full" multiple onChange={handleFileUpload} />
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4 rounded-lg border p-3">
                  <h4 className="mb-2 text-sm font-medium">Archivos subidos:</h4>
                  <ul className="space-y-1">
                    {uploadedFiles.map((file, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <FileText className="mr-2 h-4 w-4 text-gray-500" />
                        {file}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-medium">Resumen del trámite</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Trámite:</span> Constancia de Habilidad
                </p>
                <p>
                  <span className="font-medium">Propósito:</span> Presentación laboral
                </p>
                <p>
                  <span className="font-medium">Entidad:</span> Constructora ABC S.A.C.
                </p>
                <p>
                  <span className="font-medium">Tipo de entrega:</span>{" "}
                  {deliveryType === "digital"
                    ? "Digital (PDF)"
                    : deliveryType === "fisica"
                      ? "Física (Recojo en sede)"
                      : "Física (Envío por courier)"}
                </p>
                {deliveryType === "courier" && selectedAddress && (
                  <p>
                    <span className="font-medium">Dirección de entrega:</span> {selectedAddress}
                  </p>
                )}
                <p>
                  <span className="font-medium">Costo:</span> S/. 30.00
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Método de pago</Label>
              <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod} className="space-y-3">
                <div className="flex items-start space-x-2 rounded-lg border p-3">
                  <RadioGroupItem value="tarjeta" id="tarjeta" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="tarjeta" className="font-medium">
                      Tarjeta de crédito/débito
                    </Label>
                    <p className="text-sm text-gray-500">Pago inmediato con Visa, Mastercard, etc.</p>
                    {selectedPaymentMethod === "tarjeta" && (
                      <div className="mt-3 space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Número de tarjeta</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Fecha de expiración</Label>
                            <Input id="expiry" placeholder="MM/AA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Nombre en la tarjeta</Label>
                          <Input id="card-name" placeholder="NOMBRE APELLIDO" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2 rounded-lg border p-3">
                  <RadioGroupItem value="transferencia" id="transferencia" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="transferencia" className="font-medium">
                      Transferencia bancaria
                    </Label>
                    <p className="text-sm text-gray-500">Transferencia desde su banco a nuestra cuenta</p>
                    {selectedPaymentMethod === "transferencia" && (
                      <div className="mt-3 space-y-3">
                        <div className="rounded-md bg-gray-50 p-3 text-sm">
                          <p>
                            <span className="font-medium">Banco:</span> BCP
                          </p>
                          <p>
                            <span className="font-medium">Cuenta:</span> 123-4567890-0-01
                          </p>
                          <p>
                            <span className="font-medium">Titular:</span> CIP Junín
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="transfer-proof">Comprobante de transferencia</Label>
                          <Input id="transfer-proof" type="file" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2 rounded-lg border p-3">
                  <RadioGroupItem value="yape" id="yape" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="yape" className="font-medium">
                      Yape / Plin
                    </Label>
                    <p className="text-sm text-gray-500">Pago rápido con aplicaciones móviles</p>
                    {selectedPaymentMethod === "yape" && (
                      <div className="mt-3 space-y-3">
                        <div className="flex items-center justify-center">
                          <div className="text-center">
                            <div className="mx-auto h-32 w-32 rounded-lg bg-gray-100 p-2">
                              <QrCodeIcon className="h-full w-full text-purple-600" />
                            </div>
                            <p className="mt-2 text-sm font-medium">Escanea para pagar</p>
                            <p className="text-xs text-gray-500">987 654 321 | CIP Junín</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yape-proof">Comprobante de pago</Label>
                          <Input id="yape-proof" type="file" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  Acepto los términos y condiciones del servicio
                </Label>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">¡Trámite Completado!</h3>
            <p className="mb-6 text-gray-600">
              Su solicitud de Constancia de Habilidad ha sido recibida correctamente.
            </p>
            <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
              <h4 className="mb-2 font-medium">Detalles del trámite:</h4>
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
            <p className="text-sm text-gray-500">
              Recibirá notificaciones sobre el avance de su trámite. También puede verificar el estado en la sección
              "Seguimiento de Trámites".
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{currentStep < totalSteps ? `Paso ${currentStep} de ${totalSteps}` : "Confirmación"}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Progress bar */}
          <div className="mb-6">
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-red-700 transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="mt-2 flex justify-between">
              <span className="text-xs font-medium">Información</span>
              <span className="text-xs font-medium">Documentos</span>
              <span className="text-xs font-medium">Pago</span>
              <span className="text-xs font-medium">Confirmación</span>
            </div>
          </div>

          {renderStepContent()}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onPrevStep} disabled={currentStep === 1}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
          </Button>
          <Button
            onClick={onNextStep}
            className={currentStep === totalSteps ? "bg-green-600 hover:bg-green-700" : "bg-red-700 hover:bg-red-800"}
          >
            {currentStep === totalSteps ? "Finalizar" : "Siguiente"} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      {/* Google Maps Modal */}
      <Dialog open={showMapModal} onOpenChange={setShowMapModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Seleccione su ubicación</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-lg border">
            <div ref={mapRef} className="h-full w-full bg-gray-100">
              {/* En una implementación real, aquí iría el componente de Google Maps */}
              <div className="flex h-full w-full flex-col items-center justify-center p-4">
                <MapPin className="mb-4 h-12 w-12 text-red-700" />
                <p className="text-center">Mapa de Google Maps</p>
                <p className="mt-2 text-sm text-gray-500">Seleccione su ubicación exacta en el mapa</p>
                <div className="mt-4 w-full rounded-lg bg-gray-200 p-2 text-center">
                  Av. Giráldez 245, Huancayo, Junín
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowMapModal(false)}>
              Cancelar
            </Button>
            <Button className="bg-red-700 hover:bg-red-800" onClick={handleConfirmLocation}>
              Confirmar ubicación
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function QrCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

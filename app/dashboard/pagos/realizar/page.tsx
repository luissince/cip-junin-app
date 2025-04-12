"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

export default function MakePaymentPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("tarjeta")
  const totalSteps = 3

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Redirect to success page
      router.push("/dashboard/pagos/completado")
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Realizar Pago</h1>

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
                <span className="text-xs font-medium">Servicio</span>
                <span className="text-xs font-medium">Método de pago</span>
                <span className="text-xs font-medium">Confirmación</span>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-type">Tipo de pago</Label>
                  <Select defaultValue="colegiatura">
                    <SelectTrigger id="payment-type">
                      <SelectValue placeholder="Seleccione el tipo de pago" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="colegiatura">Cuota anual de colegiatura</SelectItem>
                      <SelectItem value="constancia">Constancia de habilidad</SelectItem>
                      <SelectItem value="certificado">Certificado de obra</SelectItem>
                      <SelectItem value="curso">Inscripción a curso</SelectItem>
                      <SelectItem value="otro">Otro servicio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-2 font-medium">Detalle del pago</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Cuota anual 2024</span>
                      <span>S/. 350.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IGV (18%)</span>
                      <span>S/. 63.00</span>
                    </div>
                    <div className="border-t pt-2 font-medium">
                      <div className="flex justify-between">
                        <span>Total a pagar</span>
                        <span>S/. 413.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invoice-type">Tipo de comprobante</Label>
                  <Select defaultValue="boleta">
                    <SelectTrigger id="invoice-type">
                      <SelectValue placeholder="Seleccione el tipo de comprobante" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boleta">Boleta de venta</SelectItem>
                      <SelectItem value="factura">Factura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invoice-email">Correo para envío de comprobante</Label>
                  <Input
                    id="invoice-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    defaultValue="carlos.rodriguez@example.com"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <Label>Seleccione el método de pago</Label>
                <RadioGroup
                  value={selectedPaymentMethod}
                  onValueChange={setSelectedPaymentMethod}
                  className="space-y-3"
                >
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
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">¡Pago Completado!</h3>
                <p className="mb-6 text-gray-600">Su pago de cuota anual ha sido procesado correctamente.</p>
                <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
                  <h4 className="mb-2 font-medium">Detalles del pago:</h4>
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
                <p className="text-sm text-gray-500">
                  Se ha enviado un comprobante electrónico a su correo. También puede descargarlo desde su historial de
                  pagos.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <Button
              onClick={handleNextStep}
              className={currentStep === totalSteps ? "bg-green-600 hover:bg-green-700" : "bg-red-700 hover:bg-red-800"}
            >
              {currentStep === totalSteps ? "Finalizar" : "Siguiente"} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
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

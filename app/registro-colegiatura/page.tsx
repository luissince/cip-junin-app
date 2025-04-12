"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RegistroColegiaturaPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string[]>>({
    titulo: [],
    dni: [],
    fotos: [],
    comprobante: [],
    otros: [],
  })

  const handleFileUpload = (category: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => file.name)
      setUploadedFiles((prev) => ({
        ...prev,
        [category]: [...prev[category], ...newFiles],
      }))
    }
  }

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      // Redirect to success page
      router.push("/registro-colegiatura/completado")
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
              <p>Complete sus datos personales. Esta información será utilizada para su registro en el CIP.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dni">DNI</Label>
              <Input id="dni" placeholder="Ingrese su número de DNI" defaultValue="12345678" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nombres">Nombres completos</Label>
              <Input id="nombres" placeholder="Ingrese sus nombres" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos completos</Label>
              <Input id="apellidos" placeholder="Ingrese sus apellidos" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="ejemplo@correo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" placeholder="999 999 999" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="direccion">Dirección</Label>
              <Input id="direccion" placeholder="Ingrese su dirección completa" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                <Input id="fechaNacimiento" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genero">Género</Label>
                <Select defaultValue="masculino">
                  <SelectTrigger id="genero">
                    <SelectValue placeholder="Seleccione su género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
              <p>Complete la información sobre su formación académica y especialidad.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="universidad">Universidad</Label>
              <Input id="universidad" placeholder="Nombre de la universidad donde se tituló" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="especialidad">Especialidad</Label>
              <Select defaultValue="civil">
                <SelectTrigger id="especialidad">
                  <SelectValue placeholder="Seleccione su especialidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="civil">Ingeniería Civil</SelectItem>
                  <SelectItem value="mecanica">Ingeniería Mecánica</SelectItem>
                  <SelectItem value="electrica">Ingeniería Eléctrica</SelectItem>
                  <SelectItem value="sistemas">Ingeniería de Sistemas</SelectItem>
                  <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                  <SelectItem value="minas">Ingeniería de Minas</SelectItem>
                  <SelectItem value="ambiental">Ingeniería Ambiental</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fechaTitulacion">Fecha de titulación</Label>
                <Input id="fechaTitulacion" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numeroTitulo">Número de título</Label>
                <Input id="numeroTitulo" placeholder="Número de registro del título" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="centroLaboral">Centro laboral actual (opcional)</Label>
              <Input id="centroLaboral" placeholder="Nombre de la empresa donde trabaja" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo actual (opcional)</Label>
              <Input id="cargo" placeholder="Cargo que desempeña" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experiencia">Experiencia profesional (opcional)</Label>
              <Textarea id="experiencia" placeholder="Describa brevemente su experiencia profesional" rows={4} />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
              <p>
                Adjunte los documentos requeridos para su colegiatura. Todos los documentos deben estar en formato PDF o
                imagen (JPG, PNG).
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border p-4">
                <Label htmlFor="titulo-upload" className="mb-2 block font-medium">
                  Título profesional <span className="text-red-600">*</span>
                </Label>
                <p className="mb-3 text-xs text-gray-500">
                  Adjunte una copia legalizada de su título profesional de ingeniero.
                </p>
                <Input
                  id="titulo-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload("titulo", e)}
                />
                {uploadedFiles.titulo.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-green-600">Archivos subidos:</p>
                    <ul className="mt-1 text-xs">
                      {uploadedFiles.titulo.map((file, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="rounded-lg border p-4">
                <Label htmlFor="dni-upload" className="mb-2 block font-medium">
                  DNI <span className="text-red-600">*</span>
                </Label>
                <p className="mb-3 text-xs text-gray-500">Adjunte una copia de su DNI por ambos lados.</p>
                <Input
                  id="dni-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload("dni", e)}
                />
                {uploadedFiles.dni.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-green-600">Archivos subidos:</p>
                    <ul className="mt-1 text-xs">
                      {uploadedFiles.dni.map((file, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="rounded-lg border p-4">
                <Label htmlFor="fotos-upload" className="mb-2 block font-medium">
                  Fotografías <span className="text-red-600">*</span>
                </Label>
                <p className="mb-3 text-xs text-gray-500">
                  Adjunte 3 fotografías tamaño pasaporte a color con fondo blanco.
                </p>
                <Input
                  id="fotos-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  multiple
                  onChange={(e) => handleFileUpload("fotos", e)}
                />
                {uploadedFiles.fotos.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-green-600">Archivos subidos:</p>
                    <ul className="mt-1 text-xs">
                      {uploadedFiles.fotos.map((file, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="rounded-lg border p-4">
                <Label htmlFor="comprobante-upload" className="mb-2 block font-medium">
                  Comprobante de pago <span className="text-red-600">*</span>
                </Label>
                <p className="mb-3 text-xs text-gray-500">Adjunte el comprobante de pago por derecho de colegiatura.</p>
                <Input
                  id="comprobante-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload("comprobante", e)}
                />
                {uploadedFiles.comprobante.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-green-600">Archivos subidos:</p>
                    <ul className="mt-1 text-xs">
                      {uploadedFiles.comprobante.map((file, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="rounded-lg border p-4">
                <Label htmlFor="otros-upload" className="mb-2 block font-medium">
                  Otros documentos (opcional)
                </Label>
                <p className="mb-3 text-xs text-gray-500">
                  Adjunte cualquier otro documento relevante para su colegiatura.
                </p>
                <Input
                  id="otros-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={(e) => handleFileUpload("otros", e)}
                />
                {uploadedFiles.otros.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-green-600">Archivos subidos:</p>
                    <ul className="mt-1 text-xs">
                      {uploadedFiles.otros.map((file, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-1 h-3 w-3 text-green-600" />
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
              <p>Seleccione el método de pago para abonar los derechos de colegiatura.</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-medium">Detalle de pagos</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Derecho de Colegiatura</span>
                  <span>S/. 1,200.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cuota Semestral</span>
                  <span>S/. 180.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Carnet de Colegiado</span>
                  <span>S/. 50.00</span>
                </div>
                <div className="border-t pt-2 font-medium">
                  <div className="flex justify-between">
                    <span>Total a pagar</span>
                    <span>S/. 1,430.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Seleccione el método de pago</Label>
              <RadioGroup defaultValue="tarjeta" className="space-y-3">
                <div className="flex items-start space-x-2 rounded-lg border p-3">
                  <RadioGroupItem value="tarjeta" id="tarjeta" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="tarjeta" className="font-medium">
                      Tarjeta de crédito/débito
                    </Label>
                    <p className="text-sm text-gray-500">Pago inmediato con Visa, Mastercard, etc.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 rounded-lg border p-3">
                  <RadioGroupItem value="transferencia" id="transferencia" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="transferencia" className="font-medium">
                      Transferencia bancaria
                    </Label>
                    <p className="text-sm text-gray-500">Transferencia desde su banco a nuestra cuenta</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 rounded-lg border p-3">
                  <RadioGroupItem value="yape" id="yape" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="yape" className="font-medium">
                      Yape / Plin
                    </Label>
                    <p className="text-sm text-gray-500">Pago rápido con aplicaciones móviles</p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                Acepto los términos y condiciones del CIP y declaro que la información proporcionada es verídica.
              </Label>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold">¡Solicitud Completada!</h3>
            <p className="mb-6 text-gray-600">
              Su solicitud de colegiatura ha sido recibida correctamente y está siendo procesada.
            </p>
            <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
              <h4 className="mb-2 font-medium">Detalles de la solicitud:</h4>
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
            <p className="text-sm text-gray-500">
              Recibirá notificaciones sobre el avance de su solicitud en el correo electrónico proporcionado. Una vez
              aprobada su solicitud, será contactado para coordinar su participación en la ceremonia de juramentación.
            </p>
          </div>
        )

      default:
        return null
    }
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
        <h1 className="text-2xl font-bold text-gray-800">Registro de Colegiatura</h1>

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
                <span className="text-xs font-medium">Datos personales</span>
                <span className="text-xs font-medium">Formación</span>
                <span className="text-xs font-medium">Documentos</span>
                <span className="text-xs font-medium">Pago</span>
                <span className="text-xs font-medium">Confirmación</span>
              </div>
            </div>

            {renderStepContent()}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <Button
              onClick={handleNextStep}
              className={currentStep === totalSteps ? "bg-green-600 hover:bg-green-700" : "bg-red-700 hover:bg-red-800"}
            >
              {currentStep === totalSteps ? "Finalizar" : "Siguiente"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

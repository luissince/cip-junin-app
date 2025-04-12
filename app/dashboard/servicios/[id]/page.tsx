import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Search, QrCode, CheckCircle, FileText } from "lucide-react"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const serviceId = params.id

  // Datos de ejemplo para los servicios
  const services = {
    cursos: {
      title: "Cursos y Capacitaciones",
      description: "Acceda a cursos, talleres y capacitaciones para su desarrollo profesional",
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      color: "bg-blue-50",
      content: {
        description:
          "El CIP Junín ofrece una amplia variedad de cursos y capacitaciones para el desarrollo profesional de sus colegiados. Estos cursos son impartidos por profesionales de reconocida trayectoria y están diseñados para mantener actualizados a los ingenieros en las últimas tendencias y tecnologías de su especialidad.",
        steps: [
          {
            title: "Explorar cursos disponibles",
            description:
              "Revise el catálogo de cursos disponibles y seleccione el que más se ajuste a sus necesidades.",
          },
          {
            title: "Verificar requisitos",
            description: "Asegúrese de cumplir con los requisitos previos del curso seleccionado.",
          },
          {
            title: "Realizar inscripción",
            description: "Complete el formulario de inscripción y realice el pago correspondiente.",
          },
          {
            title: "Asistir al curso",
            description: "Participe en las sesiones programadas según el calendario establecido.",
          },
          {
            title: "Obtener certificado",
            description: "Al finalizar el curso y aprobar las evaluaciones, recibirá su certificado digital.",
          },
        ],
        additionalInfo:
          "Los cursos pueden ser presenciales, virtuales o en modalidad híbrida. Los colegiados hábiles reciben descuentos especiales en todos los cursos.",
      },
    },
    "verificar-habilidad": {
      title: "Verificar Habilidad",
      description: "Consulte el estado de habilidad de otros colegiados",
      icon: <Search className="h-12 w-12 text-green-600" />,
      color: "bg-green-50",
      content: {
        description:
          "Este servicio permite verificar el estado de habilidad de cualquier ingeniero colegiado en el Perú. La habilidad profesional es un requisito indispensable para el ejercicio legal de la ingeniería y certifica que el profesional está al día en sus obligaciones con el Colegio de Ingenieros.",
        searchForm: true,
        additionalInfo:
          "La información proporcionada es de carácter público y se actualiza diariamente. En caso de discrepancias, comuníquese con la oficina administrativa del CIP Junín.",
      },
    },
    "validar-documentos": {
      title: "Validar Documentos",
      description: "Verifique la autenticidad de documentos mediante código QR",
      icon: <QrCode className="h-12 w-12 text-amber-600" />,
      color: "bg-amber-50",
      content: {
        description:
          "Este servicio permite verificar la autenticidad de documentos emitidos por el CIP Junín mediante la lectura de códigos QR. Los documentos oficiales como constancias, certificados y carnets incluyen un código QR que contiene información encriptada para validar su legitimidad.",
        qrScanner: true,
        steps: [
          {
            title: "Escanear código QR",
            description: "Utilice la cámara de su dispositivo para escanear el código QR del documento.",
          },
          {
            title: "Verificar información",
            description: "Compare la información mostrada con la que aparece en el documento físico.",
          },
          { title: "Confirmar autenticidad", description: "Si la información coincide, el documento es auténtico." },
        ],
        additionalInfo:
          "También puede validar documentos ingresando el código de verificación impreso en el documento en la sección correspondiente.",
      },
    },
  }

  // Obtener el servicio seleccionado o mostrar un mensaje si no existe
  const service = services[serviceId as keyof typeof services]

  if (!service) {
    return (
      <DashboardLayout>
        <div className="container mx-auto space-y-6 p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link href="/dashboard/servicios">
                <ArrowLeft className="mr-1 h-4 w-4" /> Volver
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Servicio no encontrado</h1>
          </div>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <p className="text-gray-500">El servicio solicitado no está disponible.</p>
              <Button asChild className="mt-4 bg-red-700 hover:bg-red-800">
                <Link href="/dashboard/servicios">Ver todos los servicios</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/dashboard/servicios">
              <ArrowLeft className="mr-1 h-4 w-4" /> Volver
            </Link>
          </Button>
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">{service.title}</h1>
        </div>

        <Card className={service.color}>
          <CardHeader className="flex flex-row items-center gap-4 pb-2 pt-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">{service.icon}</div>
            <div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {service.content && (
              <div className="space-y-6">
                <p className="text-gray-700">{service.content.description}</p>

                {service.content.steps && (
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-4 text-lg font-medium">Pasos a seguir</h3>
                    <div className="space-y-4">
                      {service.content.steps.map((step, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.content.searchForm && (
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-4 text-lg font-medium">Verificar habilidad de colegiado</h3>
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cip-number" className="mb-1 block text-sm font-medium">
                            Número de CIP
                          </label>
                          <input
                            type="text"
                            id="cip-number"
                            className="w-full rounded-md border border-gray-300 p-2 text-sm"
                            placeholder="Ej: 123456"
                          />
                        </div>
                        <div>
                          <label htmlFor="dni" className="mb-1 block text-sm font-medium">
                            DNI (opcional)
                          </label>
                          <input
                            type="text"
                            id="dni"
                            className="w-full rounded-md border border-gray-300 p-2 text-sm"
                            placeholder="Ej: 12345678"
                          />
                        </div>
                      </div>
                      <Button className="w-full bg-red-700 hover:bg-red-800">
                        <Search className="mr-2 h-4 w-4" /> Verificar habilidad
                      </Button>

                      {/* Resultado de ejemplo */}
                      <div className="mt-4 rounded-lg border bg-green-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Ing. María Rodríguez Sánchez</h4>
                            <p className="text-sm">CIP N° 123456 - Ingeniera Civil</p>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                Habilitado
                              </span>
                              <span className="text-xs text-gray-500">Hasta: 31/12/2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {service.content.qrScanner && (
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-4 text-lg font-medium">Escanear código QR</h3>
                    <div className="space-y-4">
                      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                        <QrCode className="mb-4 h-16 w-16 text-gray-400" />
                        <p className="mb-2 text-center text-sm font-medium">Escanee el código QR del documento</p>
                        <p className="text-center text-xs text-gray-500">
                          Permita el acceso a la cámara cuando se le solicite
                        </p>
                        <Button className="mt-4 bg-red-700 hover:bg-red-800">Iniciar escáner</Button>
                      </div>

                      <div className="text-center text-sm text-gray-600">
                        <p>También puede validar ingresando el código de verificación:</p>
                        <div className="mt-2 flex gap-2">
                          <input
                            type="text"
                            className="flex-1 rounded-md border border-gray-300 p-2 text-sm"
                            placeholder="Ej: CIP-2024-ABC123"
                          />
                          <Button variant="outline">Verificar</Button>
                        </div>
                      </div>

                      {/* Resultado de ejemplo */}
                      <div className="mt-4 rounded-lg border bg-green-50 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <FileText className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Constancia de Habilidad</h4>
                            <p className="text-sm">Emitida para: Ing. Carlos Rodríguez Mendoza</p>
                            <p className="text-sm">Fecha de emisión: 15/04/2024</p>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                Documento válido
                              </span>
                              <span className="text-xs text-gray-500">Código: CIP-2024-ABC123</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {service.content.additionalInfo && (
                  <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                    <h3 className="mb-2 font-medium">Información adicional</h3>
                    <p>{service.content.additionalInfo}</p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button className="bg-red-700 hover:bg-red-800">
                    {service.content.searchForm
                      ? "Consultar"
                      : service.content.qrScanner
                        ? "Validar documento"
                        : "Solicitar servicio"}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

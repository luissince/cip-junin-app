import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Receipt, Truck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PaymentOptions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Servicios de Pago</CardTitle>
        <CardDescription>Seleccione el servicio que desea pagar</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="colegiatura" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colegiatura">Colegiatura</TabsTrigger>
            <TabsTrigger value="tramites">Trámites</TabsTrigger>
            <TabsTrigger value="otros">Otros</TabsTrigger>
          </TabsList>
          <TabsContent value="colegiatura" className="mt-4">
            <div className="rounded-lg border p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Cuota Anual 2024</h3>
                  <p className="text-sm text-gray-500">Periodo: Enero - Diciembre 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">S/. 350.00</p>
                  <p className="text-xs text-gray-500">Inc. IGV</p>
                </div>
              </div>

              <div className="mb-4 space-y-2 rounded-md bg-gray-50 p-3">
                <div className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">Tarjeta de crédito/débito</span>
                </div>
                <div className="flex items-center">
                  <Receipt className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">Yape / Plin</span>
                </div>
              </div>

              <Button className="w-full bg-red-700 hover:bg-red-800" asChild>
                <Link href="/dashboard/pagos/realizar">Realizar Pago</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="tramites" className="mt-4">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Constancia de Habilidad</h3>
                    <p className="text-sm text-gray-500">Documento oficial de habilidad profesional</p>
                  </div>
                  <p className="font-bold">S/. 30.00</p>
                </div>
                <div className="mb-3 flex items-center">
                  <Truck className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">Entrega: Digital / Física (+S/10.00)</span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/tramites/solicitar">Solicitar</Link>
                </Button>
              </div>

              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Certificado de Proyecto</h3>
                    <p className="text-sm text-gray-500">Validación oficial de proyectos</p>
                  </div>
                  <p className="font-bold">S/. 120.00</p>
                </div>
                <div className="mb-3 flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">Requiere documentación adicional</span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/tramites/solicitar">Solicitar</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="otros" className="mt-4">
            <div className="rounded-lg border p-4 text-center">
              <p className="mb-2 text-gray-500">Otros servicios disponibles en sede</p>
              <Button variant="outline" className="w-full">
                Ver Catálogo Completo
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Landmark, QrCode, Smartphone } from "lucide-react"

export default function PaymentMethodsInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de Métodos de Pago</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tarjeta" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tarjeta">Tarjeta</TabsTrigger>
            <TabsTrigger value="transferencia">Transferencia</TabsTrigger>
            <TabsTrigger value="deposito">Depósito</TabsTrigger>
            <TabsTrigger value="billetera">Billetera Digital</TabsTrigger>
          </TabsList>

          <TabsContent value="tarjeta" className="mt-4 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <CreditCard className="mt-1 h-5 w-5 text-red-700" />
              <div>
                <h3 className="font-medium">Tarjeta de Crédito o Débito</h3>
                <p className="text-sm text-gray-600">
                  Aceptamos todas las tarjetas Visa, Mastercard, American Express y Diners Club.
                </p>
                <div className="mt-3 flex gap-2">
                  <div className="h-8 w-12 rounded border bg-white p-1">
                    <img
                      src="/placeholder.svg?height=24&width=36"
                      alt="Visa"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-8 w-12 rounded border bg-white p-1">
                    <img
                      src="/placeholder.svg?height=24&width=36"
                      alt="Mastercard"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-8 w-12 rounded border bg-white p-1">
                    <img
                      src="/placeholder.svg?height=24&width=36"
                      alt="American Express"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-medium">Proceso:</h4>
                  <ol className="ml-5 mt-1 list-decimal text-sm text-gray-600">
                    <li>Seleccione el servicio a pagar</li>
                    <li>Elija "Pago con tarjeta" como método de pago</li>
                    <li>Ingrese los datos de su tarjeta</li>
                    <li>Confirme el pago</li>
                  </ol>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  El cargo aparecerá en su estado de cuenta como "CIP JUNÍN".
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transferencia" className="mt-4 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <Landmark className="mt-1 h-5 w-5 text-red-700" />
              <div>
                <h3 className="font-medium">Transferencia Bancaria</h3>
                <p className="text-sm text-gray-600">
                  Puede realizar transferencias desde cualquier banco a nuestras cuentas oficiales.
                </p>

                <div className="mt-3 space-y-3">
                  <div className="rounded-md bg-gray-50 p-3">
                    <h4 className="text-sm font-medium">Banco de Crédito del Perú (BCP)</h4>
                    <p className="text-sm">Cuenta Corriente: 123-4567890-0-01</p>
                    <p className="text-sm">CCI: 00212345678900001234</p>
                  </div>

                  <div className="rounded-md bg-gray-50 p-3">
                    <h4 className="text-sm font-medium">BBVA</h4>
                    <p className="text-sm">Cuenta Corriente: 0011-0234-0100012345</p>
                    <p className="text-sm">CCI: 01102340100012345678</p>
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-medium">Importante:</h4>
                  <ul className="ml-5 mt-1 list-disc text-sm text-gray-600">
                    <li>Titular de la cuenta: Colegio de Ingenieros del Perú - CD Junín</li>
                    <li>RUC: 20486892154</li>
                    <li>Enviar comprobante de pago al correo: pagos@cipjunin.org.pe</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deposito" className="mt-4 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <Landmark className="mt-1 h-5 w-5 text-red-700" />
              <div>
                <h3 className="font-medium">Depósito Bancario</h3>
                <p className="text-sm text-gray-600">
                  Puede realizar depósitos en efectivo en cualquier agencia bancaria.
                </p>

                <div className="mt-3 space-y-3">
                  <div className="rounded-md bg-gray-50 p-3">
                    <h4 className="text-sm font-medium">Banco de Crédito del Perú (BCP)</h4>
                    <p className="text-sm">Cuenta Corriente: 123-4567890-0-01</p>
                  </div>

                  <div className="rounded-md bg-gray-50 p-3">
                    <h4 className="text-sm font-medium">BBVA</h4>
                    <p className="text-sm">Cuenta Corriente: 0011-0234-0100012345</p>
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-medium">Proceso:</h4>
                  <ol className="ml-5 mt-1 list-decimal text-sm text-gray-600">
                    <li>Acérquese a cualquier agencia del banco</li>
                    <li>Indique que desea hacer un depósito a la cuenta del CIP Junín</li>
                    <li>Proporcione el número de cuenta</li>
                    <li>Conserve su voucher de depósito</li>
                    <li>Registre su pago en la plataforma adjuntando una foto del voucher</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="billetera" className="mt-4 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <Smartphone className="mt-1 h-5 w-5 text-red-700" />
              <div>
                <h3 className="font-medium">Billeteras Digitales</h3>
                <p className="text-sm text-gray-600">
                  Realice pagos rápidos y seguros a través de aplicaciones móviles.
                </p>

                <div className="mt-3 space-y-3">
                  <div className="flex items-center gap-3 rounded-md bg-gray-50 p-3">
                    <QrCode className="h-10 w-10 text-purple-600" />
                    <div>
                      <h4 className="text-sm font-medium">Yape</h4>
                      <p className="text-sm">Número: 987 654 321</p>
                      <p className="text-sm">A nombre de: CIP Junín</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-md bg-gray-50 p-3">
                    <QrCode className="h-10 w-10 text-blue-600" />
                    <div>
                      <h4 className="text-sm font-medium">Plin</h4>
                      <p className="text-sm">Número: 987 654 321</p>
                      <p className="text-sm">A nombre de: CIP Junín</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-medium">Proceso:</h4>
                  <ol className="ml-5 mt-1 list-decimal text-sm text-gray-600">
                    <li>Abra su aplicación de billetera digital</li>
                    <li>Escanee el código QR o busque por número</li>
                    <li>Ingrese el monto exacto a pagar</li>
                    <li>En el detalle/descripción coloque su número de CIP</li>
                    <li>Confirme el pago</li>
                    <li>Tome captura de pantalla del comprobante</li>
                    <li>Registre su pago en la plataforma adjuntando la captura</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

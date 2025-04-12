import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AccountSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuración de la Cuenta</CardTitle>
        <CardDescription>Administre sus preferencias y seguridad</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-4 flex items-center text-lg font-medium">
            <Bell className="mr-2 h-5 w-5 text-gray-500" /> Notificaciones
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notify-events" className="font-medium">
                  Eventos y capacitaciones
                </Label>
                <p className="text-sm text-gray-500">Recibir notificaciones sobre eventos y cursos</p>
              </div>
              <Switch id="notify-events" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notify-payments" className="font-medium">
                  Pagos y vencimientos
                </Label>
                <p className="text-sm text-gray-500">Alertas sobre cuotas próximas a vencer</p>
              </div>
              <Switch id="notify-payments" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notify-procedures" className="font-medium">
                  Estado de trámites
                </Label>
                <p className="text-sm text-gray-500">Actualizaciones sobre sus trámites en curso</p>
              </div>
              <Switch id="notify-procedures" defaultChecked />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-4 flex items-center text-lg font-medium">
            <Mail className="mr-2 h-5 w-5 text-gray-500" /> Comunicaciones
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-news" className="font-medium">
                  Boletín informativo
                </Label>
                <p className="text-sm text-gray-500">Recibir noticias y actualizaciones por email</p>
              </div>
              <Switch id="email-news" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-marketing" className="font-medium">
                  Ofertas y promociones
                </Label>
                <p className="text-sm text-gray-500">Recibir información sobre descuentos y ofertas</p>
              </div>
              <Switch id="email-marketing" />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-4 flex items-center text-lg font-medium">
            <Lock className="mr-2 h-5 w-5 text-gray-500" /> Seguridad
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Cambiar contraseña</Label>
                <p className="text-sm text-gray-500">Actualice su contraseña periódicamente</p>
              </div>
              <Button variant="outline" size="sm">
                Cambiar
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor" className="font-medium">
                  Autenticación de dos factores
                </Label>
                <p className="text-sm text-gray-500">Añada una capa extra de seguridad</p>
              </div>
              <Switch id="two-factor" />
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button className="bg-red-700 hover:bg-red-800">Guardar Cambios</Button>
        </div>
      </CardContent>
    </Card>
  )
}

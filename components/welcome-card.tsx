import { CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WelcomeCard() {
  // This would come from your authentication system
  const engineerData = {
    name: "Ing. Carlos Rodríguez",
    cipNumber: "123456",
    status: "habilitado", // or "inhabilitado"
    dueDate: "30/06/2024",
    pendingPayments: 0,
  }

  return (
    <Card className="border-l-4 border-l-red-700">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{engineerData.name}</h2>
            {engineerData.status === "habilitado" ? (
              <Badge className="bg-green-600">
                <CheckCircle className="mr-1 h-3 w-3" /> Habilitado
              </Badge>
            ) : (
              <Badge variant="destructive">
                <AlertCircle className="mr-1 h-3 w-3" /> Inhabilitado
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-500">CIP N° {engineerData.cipNumber}</p>

          <div className="mt-2 rounded-md bg-gray-50 p-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-gray-500">Próximo pago</p>
                <p className="font-medium">{engineerData.dueDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Pagos pendientes</p>
                <p className="font-medium">{engineerData.pendingPayments}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

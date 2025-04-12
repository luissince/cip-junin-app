import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function PaymentHistory() {
  const payments = [
    {
      id: "PAG-2024-0123",
      date: "15/04/2024",
      concept: "Cuota Anual 2024",
      amount: "S/. 350.00",
      status: "completed",
    },
    {
      id: "PAG-2024-0089",
      date: "10/03/2024",
      concept: "Constancia de Habilidad",
      amount: "S/. 30.00",
      status: "completed",
    },
    {
      id: "PAG-2023-1245",
      date: "20/12/2023",
      concept: "Certificado de Obra",
      amount: "S/. 120.00",
      status: "completed",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Pagos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">{payment.concept}</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-500">{payment.date}</p>
                  <p className="text-xs text-gray-400">#{payment.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-medium">{payment.amount}</p>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Pagado
                </Badge>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

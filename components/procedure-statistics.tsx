import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

export default function ProcedureStatistics() {
  // Datos de ejemplo para las estadísticas
  const monthlyData = [
    { name: "Ene", completados: 12, pendientes: 5, rechazados: 2 },
    { name: "Feb", completados: 15, pendientes: 8, rechazados: 1 },
    { name: "Mar", completados: 18, pendientes: 6, rechazados: 3 },
    { name: "Abr", completados: 14, pendientes: 9, rechazados: 2 },
    { name: "May", completados: 21, pendientes: 7, rechazados: 1 },
    { name: "Jun", completados: 25, pendientes: 4, rechazados: 2 },
  ]

  const statusData = [
    { name: "Completados", value: 105, color: "#22c55e" },
    { name: "En proceso", value: 39, color: "#f59e0b" },
    { name: "Rechazados", value: 11, color: "#ef4444" },
  ]

  const typeData = [
    { name: "Constancia de Habilidad", value: 78, color: "#3b82f6" },
    { name: "Certificado de Obra", value: 45, color: "#8b5cf6" },
    { name: "Duplicado de Carnet", value: 32, color: "#ec4899" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estadísticas de Trámites</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-medium">Trámites por mes</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completados" fill="#22c55e" name="Completados" />
                  <Bar dataKey="pendientes" fill="#f59e0b" name="En proceso" />
                  <Bar dataKey="rechazados" fill="#ef4444" name="Rechazados" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <h3 className="mb-4 text-sm font-medium">Trámites por estado</h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Trámites por tipo</h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={typeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {typeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 text-center">
            <p className="text-3xl font-bold text-green-600">155</p>
            <p className="text-sm text-gray-500">Trámites completados</p>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <p className="text-3xl font-bold text-amber-600">24</p>
            <p className="text-sm text-gray-500">Trámites en proceso</p>
          </div>
          <div className="rounded-lg border p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">3.2</p>
            <p className="text-sm text-gray-500">Días promedio</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

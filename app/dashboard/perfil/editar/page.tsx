"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  const router = useRouter()

  // En una aplicación real, estos datos vendrían de una API o base de datos
  const [formData, setFormData] = useState({
    name: "Ing. Carlos Rodríguez Mendoza",
    email: "carlos.rodriguez@example.com",
    phone: "+51 987 654 321",
    address: "Av. Real 123, Huancayo, Junín",
    workplace: "Constructora ABC S.A.C.",
    workPosition: "Ingeniero de Proyectos",
    bio: "Ingeniero Civil con 10 años de experiencia en diseño estructural y gestión de proyectos de infraestructura.",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En una aplicación real, aquí enviaríamos los datos a una API
    // Simulamos una actualización exitosa
    setTimeout(() => {
      router.push("/dashboard/perfil")
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Editar Perfil</h1>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/perfil">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver
            </Link>
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" name="address" value={formData.address} onChange={handleChange} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="workplace">Centro laboral</Label>
                  <Input id="workplace" name="workplace" value={formData.workplace} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workPosition">Cargo</Label>
                  <Input id="workPosition" name="workPosition" value={formData.workPosition} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Especialidad</Label>
                <Select defaultValue="civil" onValueChange={(value) => handleSelectChange("specialty", value)}>
                  <SelectTrigger id="specialty">
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

              <div className="space-y-2">
                <Label htmlFor="bio">Biografía profesional</Label>
                <Textarea id="bio" name="bio" rows={4} value={formData.bio} onChange={handleChange} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" className="bg-red-700 hover:bg-red-800">
                <Save className="mr-2 h-4 w-4" /> Guardar cambios
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </DashboardLayout>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Mail, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RecuperarSolicitudPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [searchResult, setSearchResult] = useState<null | "success" | "error">(null)
  const [formData, setFormData] = useState({
    dni: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de búsqueda
    setTimeout(() => {
      setIsLoading(false)
      // Simulamos que encontramos la solicitud
      setSearchResult("success")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-900 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-lg">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="CIP Junín Logo"
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-center text-2xl font-bold text-white">Colegio de Ingenieros del Perú</h1>
          <h2 className="text-center text-xl font-semibold text-white">Consejo Departamental Junín</h2>
        </div>

        <Card className="border-2 border-gray-200 shadow-xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center">
              <Link href="/" className="mr-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <CardTitle className="text-xl">Recuperar número de solicitud</CardTitle>
                <CardDescription>Ingrese sus datos para recuperar su número de solicitud</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {searchResult === "success" ? (
              <div className="space-y-4">
                <Alert className="bg-green-50 text-green-800">
                  <AlertTitle className="font-medium">Solicitud encontrada</AlertTitle>
                  <AlertDescription>
                    Hemos encontrado su solicitud. Se ha enviado el número de solicitud a su correo electrónico.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-gray-600">
                  Por favor, revise su bandeja de entrada y carpeta de spam. El correo contiene el número de solicitud y
                  un enlace para acceder al seguimiento.
                </p>
                <Button className="w-full bg-red-700 hover:bg-red-800" onClick={() => router.push("/")}>
                  Volver al inicio
                </Button>
              </div>
            ) : searchResult === "error" ? (
              <div className="space-y-4">
                <Alert variant="destructive">
                  <AlertTitle className="font-medium">No se encontró la solicitud</AlertTitle>
                  <AlertDescription>
                    No hemos podido encontrar una solicitud con los datos proporcionados.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-gray-600">
                  Por favor, verifique que los datos ingresados sean correctos o intente con otro correo electrónico
                  asociado a su solicitud.
                </p>
                <Button className="w-full bg-red-700 hover:bg-red-800" onClick={() => setSearchResult(null)}>
                  Intentar nuevamente
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dni">DNI</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="dni"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                      placeholder="Ingrese su número de DNI"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ingrese el correo usado en su solicitud"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isLoading}>
                  {isLoading ? (
                    "Buscando..."
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" /> Buscar solicitud
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-xs text-gray-500">
              Si tiene problemas para recuperar su solicitud, comuníquese con soporte técnico
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

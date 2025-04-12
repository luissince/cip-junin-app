"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Shield, Lock, Eye, EyeOff, UserPlus, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginScreen() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
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
            <CardTitle className="text-center text-xl">Bienvenido</CardTitle>
            <CardDescription className="text-center">Acceda a su cuenta o inicie su colegiatura</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="login">Soy colegiado</TabsTrigger>
                <TabsTrigger value="register">Quiero colegiarme</TabsTrigger>
                <TabsTrigger value="tracking">Seguimiento</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="cipNumber">Número de CIP</Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input id="cipNumber" placeholder="Ingrese su número de CIP" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingrese su contraseña"
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isLoading}>
                    {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>

                  <div className="text-center">
                    <Button variant="link" className="text-sm text-red-700" asChild>
                      <Link href="/recuperar-contrasena">¿Olvidó su contraseña?</Link>
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <div className="space-y-4 pt-4">
                  <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                    <p>
                      Inicie su proceso de colegiatura en línea. Complete el formulario y suba los documentos
                      requeridos.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI</Label>
                    <Input id="dni" placeholder="Ingrese su número de DNI" required />
                  </div>

                  <Button asChild className="w-full bg-red-700 hover:bg-red-800">
                    <Link href="/registro-colegiatura">
                      <UserPlus className="mr-2 h-4 w-4" /> Iniciar proceso de colegiatura
                    </Link>
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    Al continuar, acepta nuestros términos y condiciones y política de privacidad.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="tracking">
                <div className="space-y-4 pt-4">
                  <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                    <p>Consulte el estado de su trámite de colegiatura ingresando su número de solicitud.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tracking-number">Número de solicitud</Label>
                    <Input id="tracking-number" placeholder="Ej: COL-2024-0078" required />
                  </div>

                  <Button asChild className="w-full bg-red-700 hover:bg-red-800">
                    <Link href="/seguimiento-colegiatura">
                      <FileText className="mr-2 h-4 w-4" /> Consultar estado
                    </Link>
                  </Button>

                  <div className="text-center">
                    <Button variant="link" className="text-sm text-red-700" asChild>
                      <Link href="/recuperar-solicitud">¿Olvidó su número de solicitud?</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-xs text-gray-500">
              Si tiene problemas para acceder, comuníquese con soporte técnico
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

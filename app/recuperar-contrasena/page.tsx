"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Shield, Calendar, User, Mail, Lock, CheckCircle, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type RecoveryStep = "verification" | "code" | "new-password" | "success"

export default function RecuperarContrasena() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<RecoveryStep>("verification")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    dni: "",
    cipNumber: "",
    collegiateDate: "",
    verificationCode: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleVerifyIdentity = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validar campos
    if (!formData.dni || !formData.cipNumber || !formData.collegiateDate) {
      setError("Todos los campos son obligatorios")
      setIsLoading(false)
      return
    }

    // Simulación de verificación
    setTimeout(() => {
      setIsLoading(false)

      // En una aplicación real, aquí verificaríamos los datos contra la base de datos
      // Por ahora, simulamos una verificación exitosa
      if (formData.dni === "12345678" && formData.cipNumber === "123456") {
        setCurrentStep("code")
      } else {
        setError("Los datos ingresados no coinciden con nuestros registros")
      }
    }, 1500)
  }

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!formData.verificationCode) {
      setError("El código de verificación es obligatorio")
      setIsLoading(false)
      return
    }

    // Simulación de verificación de código
    setTimeout(() => {
      setIsLoading(false)

      // En una aplicación real, verificaríamos el código enviado al email
      if (formData.verificationCode === "123456") {
        setCurrentStep("new-password")
      } else {
        setError("El código de verificación es incorrecto")
      }
    }, 1000)
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!formData.newPassword || !formData.confirmPassword) {
      setError("Todos los campos son obligatorios")
      setIsLoading(false)
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      setIsLoading(false)
      return
    }

    if (formData.newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      setIsLoading(false)
      return
    }

    // Simulación de cambio de contraseña
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep("success")
    }, 1500)
  }

  const handleGoToLogin = () => {
    router.push("/")
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case "verification":
        return (
          <form onSubmit={handleVerifyIdentity} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dni">DNI</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="Ingrese su DNI"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cipNumber">Número de CIP</Label>
              <div className="relative">
                <Shield className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="cipNumber"
                  name="cipNumber"
                  value={formData.cipNumber}
                  onChange={handleChange}
                  placeholder="Ingrese su número de CIP"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="collegiateDate">Fecha de colegiatura</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="collegiateDate"
                  name="collegiateDate"
                  value={formData.collegiateDate}
                  onChange={handleChange}
                  placeholder="DD/MM/AAAA"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            {error && <p className="text-sm font-medium text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isLoading}>
              {isLoading ? "Verificando..." : "Verificar identidad"}
            </Button>
          </form>
        )

      case "code":
        return (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
              <Mail className="mb-2 h-5 w-5" />
              <p>Hemos enviado un código de verificación a su correo electrónico registrado.</p>
              <p className="mt-1">Por favor, revise su bandeja de entrada y spam.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="verificationCode">Código de verificación</Label>
              <Input
                id="verificationCode"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
                placeholder="Ingrese el código de 6 dígitos"
                className="text-center text-lg tracking-widest"
                maxLength={6}
                required
              />
            </div>
            {error && <p className="text-sm font-medium text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isLoading}>
              {isLoading ? "Verificando..." : "Verificar código"}
            </Button>
            <p className="text-center text-sm text-gray-500">
              ¿No recibió el código?{" "}
              <button type="button" className="text-red-700 hover:underline">
                Reenviar
              </button>
            </p>
          </form>
        )

      case "new-password":
        return (
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nueva contraseña</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Ingrese su nueva contraseña"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme su nueva contraseña"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
              <p className="font-medium">La contraseña debe:</p>
              <ul className="ml-4 mt-1 list-disc">
                <li>Tener al menos 8 caracteres</li>
                <li>Incluir al menos una letra mayúscula</li>
                <li>Incluir al menos un número</li>
                <li>Incluir al menos un carácter especial</li>
              </ul>
            </div>
            {error && <p className="text-sm font-medium text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-red-700 hover:bg-red-800" disabled={isLoading}>
              {isLoading ? "Cambiando contraseña..." : "Cambiar contraseña"}
            </Button>
          </form>
        )

      case "success":
        return (
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">¡Contraseña actualizada!</h3>
            <p className="text-gray-600">
              Su contraseña ha sido actualizada correctamente. Ahora puede iniciar sesión con su nueva contraseña.
            </p>
            <Button onClick={handleGoToLogin} className="mt-4 w-full bg-red-700 hover:bg-red-800">
              Ir a iniciar sesión
            </Button>
          </div>
        )
    }
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
                <CardTitle className="text-xl">Recuperar contraseña</CardTitle>
                <CardDescription>
                  {currentStep === "verification" && "Verifique su identidad para continuar"}
                  {currentStep === "code" && "Ingrese el código de verificación"}
                  {currentStep === "new-password" && "Establezca una nueva contraseña"}
                  {currentStep === "success" && "Proceso completado"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
          {currentStep !== "success" && (
            <CardFooter className="flex flex-col space-y-2">
              <div className="text-center text-xs text-gray-500">
                Si tiene problemas para recuperar su contraseña, comuníquese con soporte técnico
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoginScreen from "@/components/login-screen"

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  // En una aplicación real, verificaríamos si el usuario está autenticado
  const isAuthenticated = false

  useEffect(() => {
    // Verificar si ya se mostró el splash screen en esta sesión
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash")

    if (!hasSeenSplash && typeof window !== "undefined") {
      // Si no se ha mostrado, redirigir al splash
      router.push("/splash")
    } else {
      // Si ya se mostró, simplemente mostrar la página de login
      setLoading(false)
    }
  }, [router])

  // Mientras se verifica, mostrar nada o un loader simple
  if (loading) {
    return null
  }

  if (isAuthenticated) {
    router.push("/dashboard")
    return null
  }

  return <LoginScreen />
}

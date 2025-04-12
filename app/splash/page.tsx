"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SplashScreen() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Marcar que el splash screen ya se mostró
    sessionStorage.setItem("hasSeenSplash", "true")

    const timer = setTimeout(() => {
      router.push("/")
      // Usar replace en lugar de push para evitar problemas con el historial
      // router.replace("/")
    }, 3000)

    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-900 p-4">
      <div className="w-full max-w-md space-y-8">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white p-2 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="CIP Junín Logo"
              width={120}
              height={120}
              className="h-full w-full object-contain"
            />
          </motion.div>

          <motion.h1
            className="text-center text-3xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Colegio de Ingenieros del Perú
          </motion.h1>

          <motion.h2
            className="text-center text-xl font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Consejo Departamental Junín
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-red-950">
            <motion.div
              className="absolute left-0 top-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="mt-2 text-center text-sm text-white">Cargando recursos...</p>
        </motion.div>

        <motion.div
          className="mt-8 text-center text-sm text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>Versión 1.0.0</p>
          <p className="mt-1">© 2024 CIP Junín. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </div>
  )
}

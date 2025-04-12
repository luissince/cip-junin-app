"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Play, CuboidIcon as Cube, X } from "lucide-react"

interface CipModalProps {
  open: boolean
  onClose: () => void
}

export function CipModal({ open, onClose }: CipModalProps) {
  const [activeTab, setActiveTab] = useState("video")

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Colegio de Ingenieros del Perú - CD Junín</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <Tabs defaultValue="video" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="video">
              <Play className="mr-2 h-4 w-4" /> Video Institucional
            </TabsTrigger>
            <TabsTrigger value="3d">
              <Cube className="mr-2 h-4 w-4" /> Recorrido 3D
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              {/* En una implementación real, aquí iría un reproductor de video */}
              <div className="flex h-full w-full flex-col items-center justify-center bg-gray-800 p-4 text-white">
                <Play className="mb-4 h-12 w-12" />
                <p className="text-center">Video institucional del Colegio de Ingenieros del Perú - CD Junín</p>
                <p className="mt-2 text-sm text-gray-300">Duración: 3:45 minutos</p>
                <Button className="mt-4 bg-red-700 hover:bg-red-800">Reproducir video</Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Conozca nuestra historia, misión y visión a través de este video institucional que muestra las
              instalaciones y servicios que ofrecemos a nuestros colegiados.
            </p>
          </TabsContent>

          <TabsContent value="3d" className="mt-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              {/* En una implementación real, aquí iría un visor 3D */}
              <div className="flex h-full w-full flex-col items-center justify-center bg-gray-800 p-4 text-white">
                <Cube className="mb-4 h-12 w-12" />
                <p className="text-center">Recorrido virtual 3D de las instalaciones del CIP Junín</p>
                <Button className="mt-4 bg-red-700 hover:bg-red-800">Iniciar recorrido</Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Explore nuestras instalaciones con este recorrido virtual 3D. Conozca nuestras oficinas, auditorio,
              biblioteca y demás ambientes desde cualquier dispositivo.
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

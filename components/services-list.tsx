import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  GraduationCap,
  Search,
  QrCode,
  Building,
  Users,
  Library,
  Award,
  Calendar,
  ChevronRight,
  FileText,
} from "lucide-react"

export default function ServicesList() {
  const services = [
    {
      id: "tramites",
      title: "Trámite Documentario",
      description: "Solicite constancias, certificados y otros documentos oficiales",
      icon: <FileText className="h-10 w-10 text-red-600" />,
      color: "bg-red-50",
      category: "tramites",
      featured: true,
    },
    {
      id: "cursos",
      title: "Cursos y Capacitaciones",
      description: "Acceda a cursos, talleres y capacitaciones para su desarrollo profesional",
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      color: "bg-blue-50",
      category: "educacion",
    },
    {
      id: "certificaciones",
      title: "Certificaciones Profesionales",
      description: "Obtenga certificaciones especializadas para mejorar su perfil profesional",
      icon: <GraduationCap className="h-10 w-10 text-purple-600" />,
      color: "bg-purple-50",
      category: "educacion",
    },
    {
      id: "verificar-habilidad",
      title: "Verificar Habilidad",
      description: "Consulte el estado de habilidad de otros colegiados",
      icon: <Search className="h-10 w-10 text-green-600" />,
      color: "bg-green-50",
      category: "consultas",
    },
    {
      id: "validar-documentos",
      title: "Validar Documentos",
      description: "Verifique la autenticidad de documentos mediante código QR",
      icon: <QrCode className="h-10 w-10 text-amber-600" />,
      color: "bg-amber-50",
      category: "consultas",
    },
    {
      id: "alquiler-ambientes",
      title: "Alquiler de Ambientes",
      description: "Reserve auditorios, salas de reuniones y espacios para eventos",
      icon: <Building className="h-10 w-10 text-red-600" />,
      color: "bg-red-50",
      category: "infraestructura",
    },
    {
      id: "capitulos",
      title: "Capítulos Profesionales",
      description: "Información sobre los capítulos profesionales y cómo participar",
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      color: "bg-indigo-50",
      category: "institucional",
    },
    {
      id: "biblioteca",
      title: "Biblioteca Virtual",
      description: "Acceda a libros, revistas y publicaciones técnicas digitales",
      icon: <Library className="h-10 w-10 text-teal-600" />,
      color: "bg-teal-50",
      category: "educacion",
    },
    {
      id: "reconocimientos",
      title: "Reconocimientos",
      description: "Postule a premios y reconocimientos por su trayectoria profesional",
      icon: <Award className="h-10 w-10 text-orange-600" />,
      color: "bg-orange-50",
      category: "institucional",
    },
    {
      id: "eventos",
      title: "Eventos y Conferencias",
      description: "Calendario de eventos, conferencias y actividades del CIP",
      icon: <Calendar className="h-10 w-10 text-sky-600" />,
      color: "bg-sky-50",
      category: "institucional",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Servicios Disponibles</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="tramites">Trámites</TabsTrigger>
            <TabsTrigger value="educacion">Educación</TabsTrigger>
            <TabsTrigger value="consultas">Consultas</TabsTrigger>
            <TabsTrigger value="institucional">Institucional</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {["tramites", "educacion", "consultas", "institucional", "infraestructura"].map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  category: string
  featured?: boolean
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/dashboard/servicios/${service.id}`}>
      <div className={`flex h-full flex-col rounded-lg border p-4 transition-all hover:shadow-md ${service.color}`}>
        <div className="mb-4 flex justify-center">{service.icon}</div>
        <h3 className="mb-2 text-center text-lg font-bold">{service.title}</h3>
        <p className="mb-4 flex-1 text-center text-sm text-gray-600">{service.description}</p>
        <Button variant="outline" size="sm" className="mt-auto w-full">
          Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </Link>
  )
}

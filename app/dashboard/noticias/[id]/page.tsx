import type React from "react"
import Image from "next/image"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Share2, ArrowLeft, MapPin, Clock } from "lucide-react"

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los datos de la noticia desde una API
  // usando el ID proporcionado en los parámetros
  const newsId = Number.parseInt(params.id)

  // Datos de ejemplo para la noticia
  const newsItem = {
    id: newsId,
    title: "Conferencia Internacional de Ingeniería Civil 2024",
    date: "10 Mayo, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Auditorio Principal CIP Junín, Av. Giráldez 245, Huancayo",
    image: "/placeholder.svg?height=400&width=800",
    category: "Eventos",
    content: `
      <p>El Colegio de Ingenieros del Perú - Consejo Departamental Junín tiene el agrado de invitar a todos los colegiados a la <strong>Conferencia Internacional de Ingeniería Civil 2024</strong>, que se llevará a cabo el próximo 10 de mayo en nuestro auditorio principal.</p>
      
      <p>Este importante evento contará con la participación de destacados ponentes internacionales que compartirán las últimas tendencias y avances en el campo de la ingeniería civil, con énfasis en construcción sostenible, diseño sismorresistente y nuevas tecnologías aplicadas a la infraestructura.</p>
      
      <h3>Ponentes confirmados:</h3>
      <ul>
        <li>Dr. Carlos Ramírez (España) - "Innovaciones en Estructuras Sostenibles"</li>
        <li>Ing. María Fernández (Chile) - "Diseño Sismorresistente en Latinoamérica"</li>
        <li>Dr. John Smith (EE.UU.) - "Aplicaciones de IA en Ingeniería Civil"</li>
        <li>Ing. Roberto Torres (Perú) - "Desafíos de Infraestructura en la Región Central"</li>
      </ul>
      
      <h3>Programa:</h3>
      <p>09:00 - 09:30: Registro de participantes<br>
      09:30 - 10:00: Inauguración<br>
      10:00 - 11:30: Primera ponencia<br>
      11:30 - 11:45: Coffee break<br>
      11:45 - 13:15: Segunda ponencia<br>
      13:15 - 14:30: Almuerzo<br>
      14:30 - 16:00: Tercera ponencia<br>
      16:00 - 16:15: Coffee break<br>
      16:15 - 17:45: Cuarta ponencia<br>
      17:45 - 18:00: Clausura y entrega de certificados</p>
      
      <p>La participación es gratuita para colegiados hábiles. Se entregará certificado digital de asistencia.</p>
      
      <p>¡Los esperamos!</p>
    `,
    isRegistrationRequired: true,
    isFree: true,
    relatedItems: [
      {
        id: 2,
        title: "Taller de Actualización en Normativa Sísmica",
        date: "20 Abril, 2024",
        category: "Eventos",
      },
      {
        id: 3,
        title: "Nuevos cursos de especialización para colegiados",
        date: "05 Mayo, 2024",
        category: "Capacitaciones",
      },
    ],
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/dashboard/noticias">
              <ArrowLeft className="mr-1 h-4 w-4" /> Volver
            </Link>
          </Button>
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">{newsItem.category}</h1>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="relative h-64 w-full sm:h-80">
              <Image src={newsItem.image || "/placeholder.svg"} alt={newsItem.title} fill className="object-cover" />
            </div>

            <div className="p-6">
              <h2 className="mb-4 text-2xl font-bold">{newsItem.title}</h2>

              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="mr-2 h-4 w-4 text-red-700" />
                  {newsItem.date}
                </div>
                {newsItem.time && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 h-4 w-4 text-red-700" />
                    {newsItem.time}
                  </div>
                )}
                {newsItem.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4 text-red-700" />
                    {newsItem.location}
                  </div>
                )}
              </div>

              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

              <div className="mt-8 flex flex-wrap gap-3">
                {newsItem.isRegistrationRequired && (
                  <Button className="bg-red-700 hover:bg-red-800">Inscribirse</Button>
                )}
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" /> Compartir
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {newsItem.relatedItems && newsItem.relatedItems.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contenido relacionado</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {newsItem.relatedItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="mb-2 text-sm font-medium text-red-700">{item.category}</div>
                    <h4 className="mb-2 line-clamp-2 font-bold">{item.title}</h4>
                    <div className="mb-4 text-sm text-gray-500">{item.date}</div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/dashboard/noticias/${item.id}`}>
                        Ver detalle <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

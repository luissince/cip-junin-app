import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, Award, BookOpen, ChevronRight } from "lucide-react"

export default function NewsList() {
  const news = [
    {
      id: 1,
      title: "Conferencia Internacional de Ingeniería Civil 2024",
      date: "10 Mayo, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Eventos",
      excerpt: "Participe en la conferencia más importante del año con ponentes internacionales y talleres prácticos.",
      type: "event",
    },
    {
      id: 2,
      title: "Nuevos cursos de especialización para colegiados",
      date: "05 Mayo, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Capacitaciones",
      excerpt:
        "El CIP Junín lanza nuevos cursos de especialización en BIM, gestión de proyectos y energías renovables.",
      type: "course",
    },
    {
      id: 3,
      title: "Comunicado: Actualización de cuotas para el periodo 2024",
      date: "01 Mayo, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Comunicados",
      excerpt: "Información importante sobre las nuevas tarifas y beneficios para los colegiados.",
      type: "announcement",
    },
    {
      id: 4,
      title: "Reconocimiento a ingenieros destacados de la región",
      date: "28 Abril, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Noticias",
      excerpt: "El CIP Junín reconoció la trayectoria de ingenieros que han contribuido al desarrollo de la región.",
      type: "news",
    },
    {
      id: 5,
      title: "Convenio con Universidad Nacional del Centro del Perú",
      date: "25 Abril, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Convenios",
      excerpt: "Nuevo convenio que beneficiará a colegiados con descuentos en programas de posgrado y especialización.",
      type: "news",
    },
    {
      id: 6,
      title: "Taller de Actualización en Normativa Sísmica",
      date: "20 Abril, 2024",
      image: "/placeholder.svg?height=200&width=400",
      category: "Eventos",
      excerpt: "Taller práctico sobre las últimas actualizaciones de la norma E.030 de diseño sismorresistente.",
      type: "event",
    },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="events">
            <Calendar className="mr-1 h-4 w-4" /> Eventos
          </TabsTrigger>
          <TabsTrigger value="courses">
            <BookOpen className="mr-1 h-4 w-4" /> Cursos
          </TabsTrigger>
          <TabsTrigger value="news">
            <Award className="mr-1 h-4 w-4" /> Noticias
          </TabsTrigger>
          <TabsTrigger value="announcements">
            <Users className="mr-1 h-4 w-4" /> Comunicados
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news
              .filter((item) => item.type === "event")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news
              .filter((item) => item.type === "course")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="news" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news
              .filter((item) => item.type === "news")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news
              .filter((item) => item.type === "announcement")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface NewsItem {
  id: number
  title: string
  date: string
  image: string
  category: string
  excerpt: string
  type: string
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-red-700 px-3 py-1 text-xs font-medium text-white">
          {item.category}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 text-sm text-gray-500">{item.date}</div>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold">{item.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{item.excerpt}</p>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/dashboard/noticias/${item.id}`}>
            Ver detalle <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

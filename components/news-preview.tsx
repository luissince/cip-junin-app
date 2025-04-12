import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function NewsPreview() {
  const news = [
    {
      id: 1,
      title: "Conferencia Internacional de Ingeniería Civil",
      date: "10 Mayo, 2024",
      image: "/placeholder.svg?height=100&width=200",
      category: "Eventos",
    },
    {
      id: 2,
      title: "Nuevos cursos de especialización para colegiados",
      date: "05 Mayo, 2024",
      image: "/placeholder.svg?height=100&width=200",
      category: "Capacitaciones",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
        <CardTitle className="text-lg font-bold">Noticias y Eventos</CardTitle>
        <Button variant="ghost" size="sm" className="text-red-700" asChild>
          <Link href="/dashboard/noticias">
            Ver todas <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-xs font-medium text-red-700">{item.category}</span>
                <h3 className="line-clamp-2 font-medium">{item.title}</h3>
                <span className="mt-auto text-xs text-gray-500">{item.date}</span>
                <Button variant="link" size="sm" className="mt-1 h-auto p-0 text-red-700" asChild>
                  <Link href={`/dashboard/noticias/${item.id}`}>Ver detalle</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

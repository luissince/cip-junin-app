import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Phone, MapPin, Calendar, Building, Pencil } from "lucide-react"

export default function ProfileCard() {
  // This would come from your authentication system
  const engineerData = {
    name: "Ing. Carlos Rodríguez Mendoza",
    cipNumber: "123456",
    specialty: "Ingeniería Civil",
    status: "habilitado",
    email: "carlos.rodriguez@example.com",
    phone: "+51 987 654 321",
    address: "Av. Real 123, Huancayo, Junín",
    registrationDate: "15/06/2010",
    workplace: "Constructora ABC S.A.C.",
  }

  return (
    <Card>
      <CardHeader className="relative pb-0">
        <div className="absolute right-4 top-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/perfil/editar">
              <Pencil className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
          <div className="mb-4 flex flex-col items-center sm:mb-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 text-center">
              <Badge className="mt-2 bg-green-100 text-green-800">
                <CheckCircle className="mr-1 h-3 w-3" /> Habilitado
              </Badge>
            </div>
          </div>

          <div className="w-full">
            <h2 className="mb-1 text-center text-xl font-bold sm:text-left">{engineerData.name}</h2>
            <p className="mb-3 text-center text-sm text-gray-500 sm:text-left">
              CIP N° {engineerData.cipNumber} • {engineerData.specialty}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{engineerData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{engineerData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{engineerData.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Colegiado desde: {engineerData.registrationDate}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <Building className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Centro laboral: {engineerData.workplace}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

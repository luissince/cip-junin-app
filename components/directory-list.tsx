"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Building, Users, Search, User, MessageSquare } from "lucide-react"

export default function DirectoryList() {
  const [searchTerm, setSearchTerm] = useState("")

  const offices = [
    {
      id: 1,
      name: "Decanato",
      person: "Ing. Juan Pérez Rodríguez",
      position: "Decano Departamental",
      phone: "(064) 123-4567",
      email: "decanato@cipjunin.org.pe",
      location: "Oficina 101, 1er Piso",
    },
    {
      id: 2,
      name: "Secretaría General",
      person: "Ing. María López Torres",
      position: "Secretaria General",
      phone: "(064) 123-4568",
      email: "secretaria@cipjunin.org.pe",
      location: "Oficina 102, 1er Piso",
    },
    {
      id: 3,
      name: "Tesorería",
      person: "Ing. Carlos Gutiérrez Díaz",
      position: "Director Tesorero",
      phone: "(064) 123-4569",
      email: "tesoreria@cipjunin.org.pe",
      location: "Oficina 103, 1er Piso",
    },
    {
      id: 4,
      name: "Fiscalía",
      person: "Ing. Ana Sánchez Vargas",
      position: "Fiscal Departamental",
      phone: "(064) 123-4570",
      email: "fiscalia@cipjunin.org.pe",
      location: "Oficina 201, 2do Piso",
    },
  ]

  const committees = [
    {
      id: 1,
      name: "Comisión de Ingeniería Civil",
      person: "Ing. Roberto Mendoza Paredes",
      position: "Presidente de Comisión",
      phone: "(064) 123-4571",
      email: "civil@cipjunin.org.pe",
    },
    {
      id: 2,
      name: "Comisión de Ingeniería Mecánica",
      person: "Ing. Patricia Flores Ríos",
      position: "Presidenta de Comisión",
      phone: "(064) 123-4572",
      email: "mecanica@cipjunin.org.pe",
    },
    {
      id: 3,
      name: "Comisión de Ingeniería Eléctrica",
      person: "Ing. Jorge Ramírez Campos",
      position: "Presidente de Comisión",
      phone: "(064) 123-4573",
      email: "electrica@cipjunin.org.pe",
    },
    {
      id: 4,
      name: "Comisión de Ingeniería de Sistemas",
      person: "Ing. Lucía Morales Vega",
      position: "Presidenta de Comisión",
      phone: "(064) 123-4574",
      email: "sistemas@cipjunin.org.pe",
    },
  ]

  const services = [
    {
      id: 1,
      name: "Mesa de Partes",
      person: "Srta. Carmen Ortiz",
      phone: "(064) 123-4575",
      email: "mesadepartes@cipjunin.org.pe",
      hours: "Lunes a Viernes: 8:00 am - 5:00 pm",
    },
    {
      id: 2,
      name: "Caja y Pagos",
      person: "Sr. Daniel Rojas",
      phone: "(064) 123-4576",
      email: "pagos@cipjunin.org.pe",
      hours: "Lunes a Viernes: 8:00 am - 4:30 pm",
    },
    {
      id: 3,
      name: "Soporte Técnico",
      person: "Ing. Fernando Castro",
      phone: "(064) 123-4577",
      email: "soporte@cipjunin.org.pe",
      hours: "Lunes a Viernes: 9:00 am - 6:00 pm",
    },
    {
      id: 4,
      name: "Biblioteca",
      person: "Lic. Silvia Mendoza",
      phone: "(064) 123-4578",
      email: "biblioteca@cipjunin.org.pe",
      hours: "Lunes a Viernes: 9:00 am - 7:00 pm",
    },
  ]

  const filteredOffices = offices.filter(
    (office) =>
      office.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.person.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredCommittees = committees.filter(
    (committee) =>
      committee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      committee.person.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.person.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contactos del CIP Junín</CardTitle>
        <div className="mt-2 flex w-full items-center space-x-2">
          <Input
            placeholder="Buscar por nombre o cargo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="offices" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="offices">
              <Building className="mr-2 h-4 w-4" /> Oficinas
            </TabsTrigger>
            <TabsTrigger value="committees">
              <Users className="mr-2 h-4 w-4" /> Comisiones
            </TabsTrigger>
            <TabsTrigger value="services">
              <User className="mr-2 h-4 w-4" /> Servicios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="offices" className="mt-4 space-y-4">
            {filteredOffices.length > 0 ? (
              filteredOffices.map((office) => (
                <div key={office.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{office.name}</h3>
                      <p className="text-sm text-gray-600">{office.person}</p>
                      <p className="text-xs text-gray-500">{office.position}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Phone className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <MessageSquare className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{office.location}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-dashed p-6 text-center">
                <p className="text-gray-500">No se encontraron resultados para "{searchTerm}"</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="committees" className="mt-4 space-y-4">
            {filteredCommittees.length > 0 ? (
              filteredCommittees.map((committee) => (
                <div key={committee.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{committee.name}</h3>
                      <p className="text-sm text-gray-600">{committee.person}</p>
                      <p className="text-xs text-gray-500">{committee.position}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Phone className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <MessageSquare className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{committee.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{committee.email}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-dashed p-6 text-center">
                <p className="text-gray-500">No se encontraron resultados para "{searchTerm}"</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="services" className="mt-4 space-y-4">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div key={service.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.person}</p>
                      <p className="text-xs text-gray-500">{service.hours}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Phone className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <MessageSquare className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{service.email}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-dashed p-6 text-center">
                <p className="text-gray-500">No se encontraron resultados para "{searchTerm}"</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

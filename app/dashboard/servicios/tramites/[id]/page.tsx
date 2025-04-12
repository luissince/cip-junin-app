import { redirect } from "next/navigation"

// Redirigir a la nueva ruta para evitar conflictos
export default function LegacyProcedureDetailPage({ params }: { params: { id: string } }) {
  redirect(`/dashboard/servicios/tramites/detalle/${params.id}`)
}

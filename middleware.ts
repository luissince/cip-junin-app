import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Obtener la URL actual
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Verificar si la ruta es la incorrecta
  if (pathname === "/dashboard/servicios/tramites/detalle/solicitar") {
    // Crear una nueva URL con la ruta correcta
    const newUrl = new URL("/dashboard/servicios/tramites/solicitar", request.url)
    // Añadir parámetros para forzar un nuevo trámite y evitar caché
    newUrl.searchParams.set("new", "true")
    newUrl.searchParams.set("t", Date.now().toString())

    // Redireccionar a la ruta correcta
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

// Configurar el middleware para que se ejecute solo en las rutas específicas
export const config = {
  matcher: ["/dashboard/servicios/tramites/detalle/solicitar"],
}

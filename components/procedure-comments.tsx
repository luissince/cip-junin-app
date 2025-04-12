"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, User } from "lucide-react"

interface Comment {
  id: string
  author: string
  role: string
  avatar?: string
  content: string
  timestamp: string
  isOfficial?: boolean
}

interface ProcedureCommentsProps {
  procedureId: string
}

export default function ProcedureComments({ procedureId }: ProcedureCommentsProps) {
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Ing. María Sánchez",
      role: "Evaluador",
      content:
        "Se ha revisado su documentación. Por favor adjunte el comprobante de pago original para continuar con el trámite.",
      timestamp: "14/04/2024 - 10:30 AM",
      isOfficial: true,
    },
    {
      id: "2",
      author: "Carlos Rodríguez",
      role: "Solicitante",
      content: "Adjunto el comprobante de pago solicitado. ¿Se requiere algún otro documento adicional?",
      timestamp: "14/04/2024 - 11:45 AM",
    },
    {
      id: "3",
      author: "Ing. María Sánchez",
      role: "Evaluador",
      content: "Comprobante recibido. Su trámite está siendo procesado. Tiempo estimado: 24 horas.",
      timestamp: "14/04/2024 - 02:15 PM",
      isOfficial: true,
    },
  ])

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: `${comments.length + 1}`,
      author: "Carlos Rodríguez",
      role: "Solicitante",
      content: newComment,
      timestamp: new Date().toLocaleString("es-PE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Comunicaciones del trámite</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-96 overflow-y-auto space-y-4 p-1">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`flex gap-3 p-3 rounded-lg ${
                comment.isOfficial ? "bg-blue-50 border border-blue-100" : "bg-gray-50 border border-gray-100"
              }`}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar} />
                <AvatarFallback className={comment.isOfficial ? "bg-blue-200" : "bg-gray-200"}>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{comment.author}</p>
                    <p className="text-xs text-gray-500">{comment.role}</p>
                  </div>
                  <span className="text-xs text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="mt-2 text-sm">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-2 border-t">
          <Textarea
            placeholder="Escriba un mensaje o consulta sobre este trámite..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px]"
          />
          <Button onClick={handleSubmitComment} className="self-end bg-red-700 hover:bg-red-800">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

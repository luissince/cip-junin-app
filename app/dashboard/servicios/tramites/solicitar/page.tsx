"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import ProcedureStepForm from "@/components/procedure-step-form"

export default function RequestProcedurePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Redirect to success page
      router.push("/dashboard/servicios/tramites/completado")
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Solicitar Trámite</h1>
        <ProcedureStepForm
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      </div>
    </DashboardLayout>
  )
}

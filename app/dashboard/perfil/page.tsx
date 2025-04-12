import DashboardLayout from "@/components/dashboard-layout"
import ProfileCard from "@/components/profile-card"
import AccountSettings from "@/components/account-settings"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Mi Perfil</h1>
        <ProfileCard />
        <AccountSettings />
      </div>
    </DashboardLayout>
  )
}

import LogoutButton from "@/component/logout/logout.button";
import { withAuth } from "@/component/withAuth";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="text-gray-600">lagi di Dashboard</p>
        <LogoutButton />
      </div>
    </div>
  );
}

export default withAuth(DashboardPage);

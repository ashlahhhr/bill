//bikin button logout
// ketika di klik, handlelogout
//handle logout, ketika berhasil delete session, lgsg ke halaman login
"use client";
import { useRouter } from "next/navigation";
import { logout } from "@/action/logout/action.logout";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logout();

      if (result.success) {
        router.push("/login");
      } else {
        console.error("error result logout", result.error);
      }
    } catch (error) {
      console.error("keknya error di handlelogout", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}

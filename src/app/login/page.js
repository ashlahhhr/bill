import { LoginForm } from "@/component/login/loginform";

export default async function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import Cookies from "js-cookie"; // untuk nyompen cookie, kalo fe "use client"
// import { useRouter } from "next/navigation";
// import { handleLogin } from "./action.login";

// export default function Page() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleLogin() {
//     try {
//       const res = await fetch("/api/v1/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       Cookies.set("sessionId", data.sessionId);
//       router.push("/dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <main className="flex justify-center">
//       <form action={handleLogin}>
//         <div className="flex flex-col justify-center gap-4 max-w-fit">
//           <input
//             type="email"
//             placeholder="email"
//             className="text-slate-900"
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             className="text-slate-900"
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <button>login</button>
//         </div>
//       </form>
//     </main>
//   );
// }

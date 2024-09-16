"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/app/login/action.login";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("aaaaaaaaa");
    try {
      const result = await login(email, password);

      if (result.success) {
        router.push("/dashboard");
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError("gatau males pengen beli treuckk");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email"
          value={email}
          on
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <div>{error}</div>}
      <div>
        <button type="submit">sign in</button>
      </div>
    </form>
  );
}

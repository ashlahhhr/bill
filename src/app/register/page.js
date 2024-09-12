"use client";

import { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const res = await fetch("/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main>
      <div className="flex flex-col justify-center gap-4 max-w-fit">
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleRegister}>daftar</button>
      </div>
    </main>
  );
}

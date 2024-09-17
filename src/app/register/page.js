"use client";

import { handleRegister } from "../../action/register/action.register";
import { useState } from "react";

export default function Page() {
  const [registerNotification, setRegisterNotification] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormStateChange = (newObj) => {
    setFormState((prev) => ({
      ...prev,
      ...newObj,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmRegister = window.confirm(
      "Apakah anda yakin ingin mendaftar?"
    );
    if (!confirmRegister) return;
    try {
      const response = await handleRegister({
        username: formState.username,
        email: formState.email,
        password: formState.password,
      });

      if (response.status !== "success") {
        const { message } = response;
        throw new Error(message);
      }

      setRegisterNotification({
        show: true,
        success: true,
        message: "Sukses mendaftar",
      });
    } catch (error) {
      setRegisterNotification({
        show: true,
        success: false,
        message: error.message,
      });
      return;
    }
  };

  return (
    <main className="flex justify-center my-5 p-5">
      {registerNotification.show && (
        <div
          className={`${
            registerNotification.success ? "bg-green-500" : "bg-red-500"
          } text-white p-2 rounded-md`}
        >
          <button
            onClick={() =>
              setRegisterNotification({
                show: false,
                success: false,
                message: "",
              })
            }
          >
            Tutup
          </button>
          {registerNotification.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center gap-4 max-w-fit">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) =>
              handleFormStateChange({ username: e.target.value })
            }
            className="text-slate-900"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => handleFormStateChange({ email: e.target.value })}
            className="text-slate-900"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) =>
              handleFormStateChange({ password: e.target.value })
            }
            className="text-slate-900"
          />
          <button type="submit">daftar</button>
        </div>
      </form>
    </main>
  );
}

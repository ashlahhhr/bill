"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function handleRegister({ username, email, password }) {
  try {
    const existingEmail = await prisma.user.findMany({
      where: {
        email,
      },
    });

    if (existingEmail.length > 0) {
      throw new Error("Email sudah terdaftar");
    }

    const hashedPassword = await bcrypt.hash(password, 9);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return {
      status: "success",
      message: "User berhasil terdaftar",
      data: newUser,
    };
  } catch (error) {
    const { message } = error;
    return {
      status: "error",
      message,
      data: null,
    };
  }
}

"use server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function login(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return { success: false, error: "salah kali emailnyaaa" };
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return { success: false, error: "passwordnya salah tuh" };
    }
    console.log("sebelum session");
    const session = await prisma.session.create({
      data: {
        userId: user.id,
      },
    });
    console.log("setelah session, sebelum cookies");
    cookies().set("sessionId", session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });
    console.log("sebelum return action login");
    return { success: true };
  } catch (error) {
    console.error("gabisa login boss", error);
    return { success: false, error: "gatau nih error loginnya" };
  }
}

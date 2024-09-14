"use server";
import { prisma } from "@/utils/prisma";

export async function handleLogin() {
  try {
    const email = FormData.get("email");
    const password = FormData.get("password");

    const user = await prisma.user.findUnique;
  } catch (error) {}
}

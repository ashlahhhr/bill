"use server";

import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";

export async function logout() {
  try {
    const sessionId = cookies().get("sessionId")?.value;
    if (sessionId) {
      await prisma.session.delete({
        where: {
          id: sessionId,
        },
      });

      cookies().delete("sessionId");
    }

    return { success: true };
  } catch (error) {
    console.error("logout error", error);
    return { success: false, error: "error gabisa logout" };
  }
}

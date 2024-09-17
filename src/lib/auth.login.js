import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";

export async function getSession() {
  const sessionId = cookies().get("sessionId")?.value;

  if (!sessionId) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  });

  if (!session || session.expiredAt < new Date()) {
    return null;
  }

  return session;
}

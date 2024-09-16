import { prisma } from "@/utils/prisma";
import Cookies from "js-cookie";

export async function getSession() {
  const sessionId = Cookies.get("sessionId")?.value;

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

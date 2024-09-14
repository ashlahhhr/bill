import { prisma } from "@/utils/prisma";
import { headers } from "next/headers";

export async function POST() {
  const headerList = headers();
  const authorization = headerList.get("authorization");
  const sessioId = authorization.split(" ")[1];

  await prisma.session.delete({
    where: {
      id: sessioId,
    },
  });

  return Response.json({ message: "dah logout" });
}

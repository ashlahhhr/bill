import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";
import { userAgent } from "next/server";

export async function GET() {
  const headerList = headers();
  const authorization = headerList.get("authorization");
  const sessionId = authorization.split(" ")[1];
  // console.log(sessionId);

  // const token = authorization.split(" ")[1];

  // try {
  //   jwt.verify(token, "secret123");
  //   return Response.json({ message: "its protected data" });
  // } catch (error) {
  //   console.log(error);
  //   return Response.json({ message: "unauthorized" }, { status: 401 });
  // }

  const isSessionValid = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  if (!isSessionValid) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ message: "its protected data" });
}

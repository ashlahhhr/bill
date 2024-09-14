import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  // 1. find user in db base on user email
  // 2. matching
  // 3. authorization

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return Response.json({ message: "Invalid Credential" }, { status: 422 });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return Response.json({ message: "Invalid Credential" }, { status: 422 });
  }

  // authorization
  // ! session id
  const session = await prisma.session.create({
    data: {
      userId: user.id,
    },
  });

  //token-based(dasar, tidak untuk prod)
  // const payload = {
  //   id: user.id,
  //   name: user.username,
  //   email: user.email,
  // };

  // const token = jwt.sign(payload, "secret123", { expiresIn: "7d" });

  return Response.json(
    { message: "Login successs!", sessioId: session.id },
    { status: 200 }
  );
}

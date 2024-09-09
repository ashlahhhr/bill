import { prisma } from "@/utils/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json({ message: "ini users", data: users });
}

export async function POST(request) {
  const { username, email, password } = await request.json();

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  return Response.json({ data: newUser, message: "user udah ditambah" });
}

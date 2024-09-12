import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    // Lanjutkan dengan create user

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return Response.json(
      { message: "user dah ditambah" },
      { data: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Hashing error:", error);
    // Handle error appropriately
  }
}

import { prisma } from "@/utils/prisma";
import { UNSTABLE_REVALIDATE_RENAME_ERROR } from "next/dist/lib/constants";

export async function GET(request, { params }) {
  const userId = Number(params.id);
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  return Response.json({ message: "ini nampilin satu user", data: user });
}

export async function PATCH(request, { params }) {
  const { username, email, password } = await request.json();
  const userId = Number(params.id);

  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: { username, email, password },
  });
  return Response.json({ data: updateUser, message: "update data user" });
}

export async function DELETE(request, { params }) {
  const userId = Number(params.id);
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return Response.json({ message: "data user udah di apus" });
}

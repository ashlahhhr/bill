import { cookies } from "next/headers";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const cookieStore = cookies();
  const sessionId = cookieStore.get("sessionId")?.value; //pake tanda tanya biar apa ya?

  if (!sessionId) {
    return redirect("/login");
  }

  const isSessionValid = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  if (!isSessionValid) {
    return redirect("/login");
  }

  return <div>{children}</div>;
}

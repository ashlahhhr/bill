import { cookies } from "next/headers"; //cookies cuma bisa di server compoennt
import { prisma } from "@/utils/prisma";
import { Redirect } from "next/navigation";

export default function () {
  return <div>dashboard</div>;
}

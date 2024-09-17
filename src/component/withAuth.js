import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth.login";

export function withAuth(Component) {
  return async function AuthenticatedComponent(props) {
    const session = await getSession();

    if (!session) {
      redirect("/login");
    }

    return <Component {...props} />;
  };
}

// components/LogoutButton.tsx

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function LogoutButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/"); // Redirect to the home page after successful logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;

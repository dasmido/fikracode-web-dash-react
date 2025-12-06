'use client'

import { useEffect } from "react";
import { useRouter } from "next/router";

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const { code, state } = router.query;

    if (code && typeof code === "string") {
      // Exchange code for tokens via Gin backend
      fetch(`http://localhost:8080/callback?code=${code}&state=${state}`)
        .then((res) => res.json())
        .then((data: TokenResponse) => {
          console.log("Tokens:", data);
          // Optionally: store tokens in cookies/localStorage
        })
        .catch((err) => console.error(err));
    }
  }, [router.query]);

  return <p>Logging you in...</p>;
}

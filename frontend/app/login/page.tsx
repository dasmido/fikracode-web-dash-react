"use client"

import { useEffect, useState } from "react";

interface AuthResponse {
  auth_url: string;
}

export default function LoginPage() {
  const [authUrl, setAuthUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAuthUrl() {
      const res = await fetch("http://localhost:8080/login");
      const data: AuthResponse = await res.json();
      setAuthUrl(data.auth_url);

      // Redirect automatically
      if (data.auth_url) {
        window.location.href = data.auth_url;
      }
    }

    fetchAuthUrl();
  }, []);

  return <p>Redirecting to login...</p>;
}

"use client";

import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="flex justify-between p-4 border-b">
      <h1>Language School</h1>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => setIsOpen(true)}>Login</button>
      )}

      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

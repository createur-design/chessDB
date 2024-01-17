"use client";
import { login } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction}>
      <label htmlFor="email">email</label>
      <input type="email" placeholder="email" name="email" />
      <label htmlFor="password">mot de passe</label>
      <input type="password" placeholder="password" name="password" />
      <button className="btn">Login</button>
      {state && <p className="text-red">{state.error}</p>}
      <div>
        <Link href="/register">
          {"Pas de compte ?"} <b>Register</b>
        </Link>
      </div>
    </form>
  );
};

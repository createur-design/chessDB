"use client";
import { register } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction}>
      <label htmlFor="name">pseudo</label>
      <input type="text" placeholder="name" name="name" />
      <label htmlFor="email">
        email<span>*</span>
      </label>
      <input type="email" placeholder="email" name="email" required />
      <label htmlFor="password">
        mot de passe<span>*</span>
      </label>
      <input type="password" placeholder="password" name="password" required />
      <label htmlFor="passwordRepeat">
        confirmer le mot de passe<span>*</span>
      </label>
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        required
      />
      <button type="submit" className="btn">
        Register
      </button>
      {state && <p className="text-red">{state.error}</p>}
      <div>
        <Link href="/login">
          J'ai un compte ? <b>Login</b>
        </Link>
      </div>
    </form>
  );
};

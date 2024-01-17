import { RegisterForm } from "@/components/registerForm/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x align-center">
        <div className="cell small-8 medium-5">
          <h1>Register</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

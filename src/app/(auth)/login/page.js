import { handleGithubLogin, login } from "@/lib/action";
import Styles from "./page.module.css";
import { LoginForm } from "@/components/loginForm/LoginForm";
export default async function LoginPage() {
  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x align-center">
        <div className="cell small-8 medium-5">
          <h1>Login</h1>
          <form action={handleGithubLogin} className="text-center">
            <button className="btn">Login with Github</button>
          </form>
          <div>
            <p className={`text-center ${Styles.or}`}>
              <span className={Styles.span}>or</span>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

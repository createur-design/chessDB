import Link from "next/link";

import Styles from "./header.module.css";

import { NavLinks } from "./NavLinks";
import { auth } from "@/lib/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            <nav className={Styles.nav}>
              <div className={Styles.logo}>Logo</div>
              <NavLinks session={session}></NavLinks>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";

import Styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Problèmes",
      path: "/problemes",
    },
    // {
    //   title: "Contact",
    //   path: "/contact",
    // },
  ];

  const [open, setOpen] = useState();
  // console.log(open);

  const pathName = usePathname();

  const session = false;
  const isAdmin = true;

  return (
    <header>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            <nav className={Styles.nav}>
              <div className={Styles.logo}>Logo</div>
              <ul className={open ? Styles.visible : undefined}>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={pathName === `${link.path}` && Styles.active}
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                ))}
                {session ? (
                  <>
                    {isAdmin && (
                      <li className={pathName === "/admin" && Styles.active}>
                        <Link href="/admin">Admin</Link>
                      </li>
                    )}
                    <li className={pathName === "/logout" && Styles.active}>
                      <Link href="/logout">Logout</Link>
                    </li>
                  </>
                ) : (
                  <li className={pathName === "/login" && Styles.active}>
                    <Link href="/login">Login</Link>
                  </li>
                )}
              </ul>
              <button onClick={() => setOpen(!open)} className={Styles.burger}>
                Menu
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

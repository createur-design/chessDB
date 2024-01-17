"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import Styles from "./header.module.css";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Problèmes",
    path: "/problemes",
  },
];
export const NavLinks = ({ session }) => {
  const [open, setOpen] = useState("close");
  const pathName = usePathname();
  return (
    <>
      <ul className={open === "open" ? Styles.visible : undefined}>
        {links.map((link, index) => (
          <li
            key={index}
            className={pathName === `${link.path}` ? Styles.active : undefined}
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
        {session ? (
          <>
            {session.user?.isAdmin && (
              <li
                className={
                  pathName === "/dashboard/create-probleme"
                    ? Styles.active
                    : undefined
                }
              >
                <Link href="/dashboard/create-probleme">Admin</Link>
              </li>
            )}
            <li className={pathName === "/logout" ? Styles.active : undefined}>
              <form action={handleLogout}>
                <button className={`btn btnRed ${Styles.btnLogout}`}>
                  Logout
                </button>
              </form>
              {/* <Link href="/logout">Logout</Link> */}
            </li>
          </>
        ) : (
          <li className={pathName === "/login" ? Styles.active : undefined}>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
      {open === "close" ? (
        <button onClick={() => setOpen("open")} className={Styles.burger}>
          Menu
        </button>
      ) : (
        <button onClick={() => setOpen("close")} className={Styles.burger}>
          X
        </button>
      )}
    </>
  );
};

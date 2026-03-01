"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <div className={css.headerSubContainer}>
          <Link className={css.logo} href="/">
            <svg width="136" height="16">
              <use href="/sprite/sprite.svg#icon-Logo" />
            </svg>
          </Link>
          <nav>
            <ul className={css.headerNav}>
              <li>
                <Link
                  className={`${css.headerLinkNav} ${pathName === "/" ? css.headerLinkNavActive : ""}`}
                  href="/"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${css.headerLinkNav} ${pathName === "/catalog" ? css.headerLinkNavActive : ""}`}
                  href="/catalog"
                  aria-label="Catalog"
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

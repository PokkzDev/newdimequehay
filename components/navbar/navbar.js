"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DimeQueHay
        </Link>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        {/* Navigation links - desktop (always visible) and mobile (visible when menu is open) */}
        <div
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          <div className={styles.navLinks}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.activeLink : ""
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/eventos"
              className={`${styles.navLink} ${
                pathname === "/eventos" ? styles.activeLink : ""
              }`}
            >
              Eventos
            </Link>
            <Link
              href="/lugares"
              className={`${styles.navLink} ${
                pathname === "/lugares" ? styles.activeLink : ""
              }`}
            >
              Lugares
            </Link>
            <Link
              href="/contacto"
              className={`${styles.navLink} ${
                pathname === "/contacto" ? styles.activeLink : ""
              }`}
            >
              Contacto
            </Link>
          </div>

          <div className={styles.authButtons}>
            {!isAuthenticated ? (
              <>
                <Link href="/iniciar-sesion" className={styles.loginButton}>
                  Iniciar Sesión
                </Link>
                <Link href="/registro" className={styles.registerButton}>
                  Registrarse
                </Link>
              </>
            ) : (
              <div className={styles.userMenuContainer}>
                <button
                  className={styles.userMenuButton}
                  onClick={toggleDropdown}
                  aria-label="User menu"
                  aria-expanded={isDropdownOpen}
                >
                  <span className={styles.userNameDisplay}>
                    {session?.user?.name || "Usuario"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.dropdownIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className={styles.userDropdown}>
                    <Link href="/perfil" className={styles.dropdownItem}>
                      Mi Perfil
                    </Link>
                    <Link href="/favoritos" className={styles.dropdownItem}>
                      Favoritos
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className={styles.dropdownItem}
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

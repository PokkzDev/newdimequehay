"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>DimeQueHay</h3>
            <p className={styles.columnText}>
              Descubre eventos y lugares cercanos, mantente informado sobre lo
              que está pasando en tu ciudad y nunca te pierdas de la diversión.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.17 3.9 3.9 0 0 1-.77-.08 4.1 4.1 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06 11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.668.01 2.985.059 4.04.044.975.207 1.504.344 1.856.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.046 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.352.3-.88.344-1.856.047-1.055.059-1.37.059-4.04 0-2.668-.01-2.985-.059-4.04-.045-.975-.207-1.504-.344-1.856a3.12 3.12 0 0 0-.748-1.15 3.166 3.166 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.047-1.37-.059-4.04-.059zm0 3.064A5.135 5.135 0 1 1 12 12.063a5.135 5.135 0 0 1 0-10.27zm0 8.468A3.333 3.333 0 1 0 12 3.598 3.333 3.333 0 0 0 12 10.2zm5.338-7.417a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Enlaces</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/eventos" className={styles.footerLink}>
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/lugares" className={styles.footerLink}>
                  Lugares
                </Link>
              </li>
              <li>
                <Link href="/contacto" className={styles.footerLink}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/terminos" className={styles.footerLink}>
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className={styles.footerLink}>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={styles.footerLink}>
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contacto</h3>
            <address className={styles.contactInfo}>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M12 1a8 8 0 0 0-8 8c0 1.421.382 2.75 1.031 3.906.209.367.379.678.566 1.039l.07.129C6.979 17.373 11.451 23 12 23c.55 0 5.02-5.627 6.333-8.927l.07-.129c.188-.361.358-.672.566-1.039A7.993 7.993 0 0 0 20 9a8 8 0 0 0-8-8zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
                Ciudad de México, México
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                </svg>
                contacto@dimequehay.com
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM5.134 17 8 14.134 9.866 16A2.001 2.001 0 0 1 12 13a1.999 1.999 0 0 1 2.25 1.984l.891.891L20 11.015V7l-9 6-9-6v10.134l3.134-3.134z" />
                </svg>
                +52 (55) 1234-5678
              </p>
            </address>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCredits}>
            <p className={styles.copyright}>
              © {currentYear} DimeQueHay. Todos los derechos reservados.
            </p>
            <div className={styles.developerSeparator}></div>
            <p className={styles.developer}>
              Desarrollado por{" "}
              <a
                href="https://pokkz.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.developerLink}
              >
                pokkz.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return false;
    }

    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    setIsLoading(true);
    setFormError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrar usuario");
      }

      // Registration successful - redirect to login page
      router.push("/iniciar-sesion?registered=true");
    } catch (error) {
      console.error("Registration error:", error);
      setFormError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <div className={styles.registerHeader}>
          <h1 className={styles.registerTitle}>Crea tu cuenta</h1>
          <p className={styles.registerSubtitle}>
            Regístrate para disfrutar de la experiencia completa
          </p>
        </div>

        {formError && <div className={styles.errorMessage}>{formError}</div>}

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {passwordError && (
            <div className={styles.errorMessage}>{passwordError}</div>
          )}

          <div className={styles.formActions}>
            <p className={styles.termsText}>
              Al registrarte, aceptas nuestros{" "}
              <Link href="/terminos" className={styles.termsLink}>
                Términos y Condiciones
              </Link>{" "}
              y{" "}
              <Link href="/privacidad" className={styles.termsLink}>
                Política de Privacidad
              </Link>
            </p>

            <button
              type="submit"
              className={styles.registerButton}
              disabled={isLoading}
            >
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </div>
        </form>

        <div className={styles.divider}>o</div>

        <div className={styles.socialLogin}>
          <button className={styles.socialButton} type="button" disabled>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>

          <button className={styles.socialButton} type="button" disabled>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Facebook
          </button>
        </div>

        <div className={styles.loginPrompt}>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/iniciar-sesion" className={styles.loginLink}>
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

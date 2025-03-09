"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./auth-forms.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result.error) {
        setError("Email o contraseña incorrectos");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("Ocurrió un error al iniciar sesión");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>Iniciar Sesión</h1>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="tu@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className={styles.authButton}
            disabled={loading}
          >
            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className={styles.authLinks}>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className={styles.authLink}>
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

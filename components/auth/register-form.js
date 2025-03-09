"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./auth-forms.module.css";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Validate password strength
    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrar usuario");
      }

      // Redirect to login page on success
      router.push("/iniciar-sesion?registered=true");
    } catch (error) {
      setError(error.message);
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>Crear Cuenta</h1>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="Tu nombre"
            />
          </div>

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
              placeholder="Mínimo 8 caracteres"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.formLabel}>
              Confirmar Contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="Repite tu contraseña"
            />
          </div>

          <button
            type="submit"
            className={styles.authButton}
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        <div className={styles.authLinks}>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/iniciar-sesion" className={styles.authLink}>
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

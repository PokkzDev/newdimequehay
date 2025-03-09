"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/iniciar-sesion");
    } else if (status === "authenticated" && session?.user) {
      setUserData(session.user);
      setIsLoading(false);
    }
  }, [status, session, router]);

  if (isLoading) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Cargando perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h1 className={styles.profileTitle}>Mi Perfil</h1>

        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.profileAvatar}>
              {userData?.image ? (
                <img
                  src={userData.image}
                  alt={userData.name || "Usuario"}
                  className={styles.avatarImage}
                />
              ) : (
                <div className={styles.avatarPlaceholder}>
                  {userData?.name?.charAt(0) || "U"}
                </div>
              )}
            </div>
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>
                {userData?.name || "Usuario"}
              </h2>
              <p className={styles.profileEmail}>{userData?.email}</p>
            </div>
          </div>

          <div className={styles.profileActions}>
            <button className={styles.actionButton}>Editar Perfil</button>
          </div>
        </div>

        <div className={styles.profileSection}>
          <h3 className={styles.sectionTitle}>Actividad Reciente</h3>
          <div className={styles.emptyState}>
            <p>No hay actividad reciente para mostrar.</p>
          </div>
        </div>

        <div className={styles.profileSection}>
          <h3 className={styles.sectionTitle}>Mis Favoritos</h3>
          <div className={styles.emptyState}>
            <p>Aún no has agregado lugares o eventos a favoritos.</p>
            <button className={styles.secondaryButton}>Explorar Lugares</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Outlet, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

export function Layout() {
  const { pathname } = useLocation();
  useScrollToTop();

  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.main}>
        <div key={pathname} className={styles.page}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

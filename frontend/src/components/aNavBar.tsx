import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

function NavBarItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        {children}
      </NavLink>
    </li>
  );
}

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className={styles.navbar}>
      <ul>{children}</ul>
    </nav>
  );
}

export { NavBar, NavBarItem };

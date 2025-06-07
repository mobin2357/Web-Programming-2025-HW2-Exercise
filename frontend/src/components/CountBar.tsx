import styles from "./CountBar.module.css";
import Shape from "./Shape";
import { useCount } from "../context/CountContext";

const CountBar = () => {
  const { counts } = useCount();
  const shapes = ["circle", "square", "triangle"] as const;
  return (
    <div className={styles.countBar}>
      <p>Circle: {counts.circle}</p>
      <p>Square: {counts.square}</p>
      <p>Triangle: {counts.triangle}</p>
    </div>
  );
};

export default CountBar;
import { Link } from "react-router";
import styles from "./FormView.module.css";

type formProps = {
  id: number;
  name: string;
  date: string;
  participants_count: number;
  isMyFormStatus: number;
  empty: number;
};

const FormView = ({
  id,
  name,
  date,
  participants_count,
  isMyFormStatus,
  empty,
}: formProps) => {
  return (
    <div className={styles.rectangle}>
      {empty === 0 &&
        (<div className={styles.topHalf}>
          {isMyFormStatus ? <Link to="/results" className={styles.topHalfLink}>{name}</Link>
            : <Link to={"/fill/" + id} className={styles.topHalfLink}>{name}</Link>}
          {isMyFormStatus === 1 && <Link to={"/builder/" + id} className={styles.editLink}>تغییر</Link>}
        </div>)}
      {empty === 0 &&
        (<div className={styles.bottomHalf}>
          <div className={styles.ll}>{date}</div>
          <div className={styles.lr}>{participants_count}</div>
        </div>
      )}
    </div>
  );
};

export default FormView;

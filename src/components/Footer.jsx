import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todo's : {completedTodos}</span>
      <span className={styles.item}>Total Todo's : {totalTodos}</span>
    </div>
  );
}

import styles from "./error.module.css";
interface IErrorProps {
    children: string | React.ReactNode;
}
export const ErrorMessage: React.FC<IErrorProps> = ({ children }) => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error}>{children}</div>
    </div>
  );
};


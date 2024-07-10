import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Page Not Found</h2>
        <p>Looks like you went to a page that does not exist.</p>
      </div>
    </div>
  );
};

export default Error;

import styles from './notification.module.css';

const Notification = ({ text }) => (
  <p className={styles.notification}>{text}</p>
);

export default Notification;

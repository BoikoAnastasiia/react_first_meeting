import styles from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ text, type }) => {
  return <p className={styles[type]}>{text}</p>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
};

Notification.defaultProps = { type: 'success' };

export default Notification;

import PropTypes from 'prop-types';

const styles = {
  contaner: {
    width: 600,
    border: '2px solid blue',
    borderColor: 'indigo',
    marginBottom: 20,
  },
};

// const Panel = ({ title, children }) => (
//     <div style={{
//         width: 200,
//         border: "2px solid blue",
//         borderColor: "red"
//     }}>
//     {title && <h2>{title}</h2>}
//         {children}
//     </div>)

const Panel = ({ title, children }) => (
  <div style={styles.contaner}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Panel;

const styles = {
  header: {
    minHeight: 80,
    backgroundColor: 'indigo',
    color: 'white',

    paddingLeft: 150,
    paddingRight: 150,
  },
};

const AppBar = ({ children }) => (
  <header style={styles.header}> {children}</header>
);

export default AppBar;

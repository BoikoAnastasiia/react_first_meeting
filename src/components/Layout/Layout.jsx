import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import Logo from '../logo';

const Layout = ({ children }) => (
  <>
    <AppBar>
      <Logo text="LOGO" />
    </AppBar>
    <Container>{children}</Container>
  </>
);
export default Layout;

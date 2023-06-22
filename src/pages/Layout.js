import { Outlet } from "react-router-dom";
import Header from './../components/header/Header';
import Container from './../components/container/Container';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
};

export default Layout;
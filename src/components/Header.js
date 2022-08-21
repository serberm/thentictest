import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="/logo-white.svg"
          style={{
            height: 40,
            width: 40,
          }}
        />
        Thentic NFT Demo
      </NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink active href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/create">Create NFT</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;

import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  z-index: 10;
`;

const NavItem = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;

  &:hover {
    color: #0070f3;
  }
`;

export default function Navigation() {
  return (
    <NavbarContainer>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/create">New Card</NavItem>
      <NavItem href="/archive">Archive</NavItem>
    </NavbarContainer>
  );
}

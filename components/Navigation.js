import styled from "styled-components";
import Link from "next/link";
import { Plus } from "lucide-react";

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  z-index: 10;
  border-radius: 24px 24px 0 0;
`;

const NavItem = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 24px;
  padding: 10px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
`;

const AddButton = styled(Plus)`
  width: 36px;
  height: 36px;
`;

export default function Navigation() {
  return (
    <NavbarContainer>
      <NavItem href="/" $isActive={pathname === "/"}>
        Home
      </NavItem>

      <NavItem href={pathname === "/" ? "/create-collection" : "/create-card"}>
        <AddButton />
      </NavItem>

      <NavItem href="/likes" $isActive={pathname === "/likes"}>
        Likes
      </NavItem>
    </NavbarContainer>
  );
}

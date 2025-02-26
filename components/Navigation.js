import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
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

  &:hover {
    color: #0070f3;
  }
`;

const AddButton = styled(Plus)`
  width: 36px;
  height: 36px;
`;

export default function Navigation() {
  const router = useRouter();
  const pathname = router.pathname;
  pathname.includes("/");

  return (
    <NavbarContainer>
      <NavItem href="/">Home</NavItem>

      <NavItem href={"/create-card"}>
        <AddButton />
      </NavItem>
      <NavItem href="/likes">Likes</NavItem>
    </NavbarContainer>
  );
}

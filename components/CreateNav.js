import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const StyledActiveLink = styled(Link)`
  font-weight: 800;
  text-decoration: none;
  color: #000000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

export default function CreateNav() {
  const router = useRouter();
  return (
    <StyledNav>
      {router.pathname === "/create-card" ? (
        <StyledActiveLink href={"/create-card"}>Card</StyledActiveLink>
      ) : (
        <StyledLink href={"/create-card"}>Card</StyledLink>
      )}
      {router.pathname === "/create-collection" ? (
        <StyledActiveLink href={"/create-collection"}>
          Collection
        </StyledActiveLink>
      ) : (
        <StyledLink href={"/create-collection"}>Collection</StyledLink>
      )}
    </StyledNav>
  );
}

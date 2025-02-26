import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: ${(prop) => prop.$active};
`;

export default function CreateNav() {
  const router = useRouter();
  return (
    <StyledNav>
      {router.pathname === "/create-card" ? (
        <StyledLink href={"/create-card"} $active="800">
          Card
        </StyledLink>
      ) : (
        <StyledLink href={"/create-card"}>Card</StyledLink>
      )}
      {router.pathname === "/create-collection" ? (
        <StyledLink href={"/create-collection"} $active="800">
          Collection
        </StyledLink>
      ) : (
        <StyledLink href={"/create-collection"}>Collection</StyledLink>
      )}
    </StyledNav>
  );
}

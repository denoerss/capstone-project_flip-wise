import { useRouter } from "next/router";
import styled from "styled-components";

const StyledBackButton = styled.button`
  font-size: 1.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
`;

export default function BackButton({ url }) {
  const router = useRouter();

  return (
    <StyledBackButton onClick={() => router.push(`${url}`)}>
      Back
    </StyledBackButton>
  );
}

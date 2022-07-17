import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ bg }) => bg || "white"};
`;

export default Container;

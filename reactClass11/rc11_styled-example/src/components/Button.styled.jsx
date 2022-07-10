import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.15);
  font-size: 1.1rem;
  padding: 1rem 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(0.97);
  }
`;

export default Button;

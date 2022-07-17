import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "green")};
  background-color: ${(props) => (props.primary ? "green" : "white")};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.95);
  }
`;
export const TomatoButton = styled(Button)`
  color: ${({ primary }) => (primary ? "white" : "tomato")};
  background: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 2px solid tomato;
`;

export default Button;

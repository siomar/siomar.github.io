import styled from "styled-components";
import { shade } from "polished";

export const Btn = styled.button`
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;

  font-weight: 400;

  svg {
    font-size: 1.1rem;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${shade(0.2, "#111")};
    color: ${shade(0.2, "#fff")};
  }
`;

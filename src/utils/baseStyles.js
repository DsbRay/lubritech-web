import styled from "styled-components";

export const color = {
  white: '#fff',
  black: '#000',

  blue: '#1f76bb',
  green: '#52b449',
}

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  padding: 8px 15px;
  background-color: ${color.blue};
  border: none;
  border-radius: 5px;
  color: ${color.white};
  transition: all 0.25s ease;
  &:hover {
    background-color: ${color.green};
    cursor: pointer;
  }
`;
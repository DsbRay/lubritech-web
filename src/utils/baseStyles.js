import styled from "styled-components";

export const color = {
  white: '#F2F2F2',
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

export const Divider = styled.button`
  background-color: ${color.green};
  width: 20%;
  height: 3px;
  display: block;
  margin: 10px auto;
`;

export const PageContent = styled.div`
  text-align: center;
  padding: 50px 30px;
  p {
    padding-bottom: 10px;
  }
  .section {
    padding-bottom: 50px;
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
      &.team {
        padding-bottom: 30px;
      }
    }
    .grid {
      .members {
        padding-bottom: 30px;
        p {
          padding: 0px;
          font-size: 16px;
          &.title {
            font-weight: 700;
          }
        }
      }
    }
    &:last-child {
      padding-bottom: 20px;
    }
  }
  @media (min-width: 768px) {
  p {
  }
  .section {
    h3 {
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .members {
        p {
          &.title {
          }
        }
      }
    }
  }
  }
`;
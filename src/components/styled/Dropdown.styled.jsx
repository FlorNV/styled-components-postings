import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  transition: height 0.5s ease-out;
  height: ${({ height }) => height || "40px"};
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  cursor: pointer;
  margin: 0;
`;

export const DropdownMenu = styled.div`
  margin-top: 20px;
  display: ${({ display }) => display || "block"};
`;

export const Image = styled.img`
  width: 20px;
  transition: transform 0.5s ease-out;
  transform: rotate(${({ isToggled }) => (isToggled ? "180deg" : "0deg")});
`;

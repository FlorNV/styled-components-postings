import React from "react";
import { BsXLg } from "react-icons/bs";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
    transform: scale(0.6);
}
100%{
    transform: scale(1);
}
`;

const fadeOut = keyframes`
0%{
    transform: scale(1);
}
100%{
    transform: scale(0.6);
}
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease-out;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          pointer-events: visible;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 20px 40px 10px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.2s ease-out;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s ease-out;

  &:hover {
    color: #000;
  }
`;

const Body = styled.div`
  box-sizing: border-box;
  height: 70%;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: #eee;
  height: 15%;
`;

const Button = styled.button`
  width: 45%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ isCancel }) =>
    isCancel ? "rgba(0, 0, 0, 0.1)" : "#f77f00"};
  color: ${({ isCancel }) => (isCancel ? "#000" : "#fff")};
  cursor: pointer;
`;

const Modal = ({ open, setOpen, title, children }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Background isOpen={open} onClick={handleClose}>
      <ModalContainer isOpen={open} onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>
            <BsXLg />
          </CloseButton>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <Button isCancel={true} onClick={handleClose}>
            Cancelar
          </Button>
          <Button>Enviar</Button>
        </Footer>
      </ModalContainer>
    </Background>
  );
};

export default Modal;

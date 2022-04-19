import React from 'react';

import logoImg from "../../assets/logo.png";
import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenModal: () => void;
}
export const Header = ({handleOpenModal}:HeaderProps) =>{
    return (
      <Container>
        <Content>
          <img src={logoImg} alt="logo ag fitness" />
          <button onClick={handleOpenModal}>Novo Treino</button>
        </Content>
      </Container>
    );
}
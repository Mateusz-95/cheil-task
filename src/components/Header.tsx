import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Wybierz urządzenie</h1>
    </Container>
  );
};

export default Header;
